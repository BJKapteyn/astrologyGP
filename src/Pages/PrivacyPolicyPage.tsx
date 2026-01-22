import { useEffect, useRef } from "react";
import { PrivacyPolicy } from "../Components/PrivacyPolicy/PrivacyPolicy";

export const PrivacyPolicyPage = () => {
    const top = useRef<HTMLDivElement>(null);

    useEffect(() => {
        top.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
        <main>
            <div ref={top}></div>
            <PrivacyPolicy />
        </main>
    );
};

export default PrivacyPolicyPage;