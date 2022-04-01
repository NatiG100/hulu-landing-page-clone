import React from 'react';

import {
    StyledPlan,
    StyledPlanContent,
    StyledPlanHeader,
    StyledPlanTableHeader,
} from './style';

const Plan = () => {
    return (
        <StyledPlan>
            <StyledPlanContent>
                <StyledPlanHeader>
                    <h1>Select Your Plan</h1>
                    <p>No hidden fees, equipment rentals, or installation appointments.</p>
                    <p><em>Switch plans or cancel anytime.^^</em></p>
                </StyledPlanHeader>
                <StyledPlanTableHeader>

                </StyledPlanTableHeader>
            </StyledPlanContent>
        </StyledPlan>
    );
}

export default Plan;