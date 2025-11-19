import { useState, useEffect } from 'react';
import { TeamMember } from '../../../../Models/Types/types';
import { sendAPIPost } from '../../../../UtilityFunctions/apiUtility';
import { buildAzureFunctionURL } from '../../../../UtilityFunctions/urlUtility';
import { FunctionNames } from '../../../../Enums/FunctionNames';

interface TeamMemberDropdownProps {
    callbackSelectTeamMember: (teamMemberId: string) => void;
}

export const TeamMemberDropdown: React.FC<TeamMemberDropdownProps> = ({callbackSelectTeamMember}) => {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const [selectedTeamMember, setSelectedTeamMember] = useState<TeamMember>();
    const [loading, setLoading] = useState<boolean>(true);
    const getAllTeamMembersEndpoint = buildAzureFunctionURL(FunctionNames.GetAllTeamMembers, process.env.REACT_APP_GET_ALL_TEAM_MEMBERS);

    useEffect(() => {
        const fetchTeamMembers = async () => {
            const response = await sendAPIPost(getAllTeamMembersEndpoint, {}, 'application/json', 'get');

            if (response.ok) {
                const teamMembers: TeamMember[] = await response.json();
                setTeamMembers(teamMembers);
                setLoading(false);
            }
        }
        fetchTeamMembers();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const teamMember: TeamMember | undefined = teamMembers.find(member => member.id === e.target.value);
        if (teamMember) {
            setSelectedTeamMember(teamMember);
            callbackSelectTeamMember(teamMember.id);
        }
    }

    return (
        <select 
            value={selectedTeamMember?.name} 
            onChange={handleChange}
            disabled={loading}
        >
            <option value={selectedTeamMember?.name}>
                {loading ? 'Loading...' : selectedTeamMember?.name || 'Select a team member'}
            </option>
            {teamMembers.map((member) => (
                <option  key={member.id} value={member.id}>
                    {member.name}
                </option>
            ))}
        </select>
    );
};