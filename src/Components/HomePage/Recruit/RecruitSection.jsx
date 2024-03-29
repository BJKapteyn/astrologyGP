import { RecruitData } from './RecruitData.jsx';
import { Recruit } from './Recruit';

export const RecruitSection = () =>  {
    
    return (
        <section className="recruit-section">
            <div className="recruit-flex">
                {RecruitData.map((data) => {
                    return (
                        <Recruit recruitData={data}></Recruit>
                    );
                })}
            </div>
        </section>
    );
}