import { RecruitData } from './RecruitData.jsx';
import { Recruit } from './Recruit';

export const RecruitSection = () =>  {
    
    return (
        <section className="recruit-section">
            <div className="recruit-flex">
                {RecruitData.map((data) => {
                    return (
                        <Recruit key={data.id} recruitData={data}></Recruit>
                    );
                })}
            </div>
        </section>
    );
}