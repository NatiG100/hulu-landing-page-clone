import React, { useState } from 'react';

import {
    StyledPlan,
    StyledPlanContent,
    StyledPlanHeader,
    StyledPlanTableHeader,
    StyledPlanTable,
    StyledBundle,
    StyledBundleHeader,
    StyledSwitchKnob,
    StyledSwitchRack,
    StyledSwitch
} from './style';

const Plan = () => {
    const [isOn, setIsOn] = useState(false);
    const toggle = () => {
        setIsOn((isOn) => (!isOn));
    }
    return (
        <StyledPlan>
            <StyledPlanContent>
                <StyledPlanHeader>
                    <h1>Select Your Plan</h1>
                    <p>No hidden fees, equipment rentals, or installation appointments.</p>
                    <p><em>Switch plans or cancel anytime.^^</em></p>
                </StyledPlanHeader>
                <StyledPlanTable>

                    <StyledPlanTableHeader>
                        <Bundle
                            isOn={isOn}
                            toggle={toggle}
                        />
                    </StyledPlanTableHeader>
                </StyledPlanTable>
            </StyledPlanContent>
        </StyledPlan>
    );
}

export default Plan;

const Bundle = ({ toggle, isOn }) => {
    return (
        <StyledBundle>
            <img src="/plus/bundles.svg" />
            <StyledBundleHeader>
                <h2>Bundle & Save</h2>
                <img src="/plus/Info_Icon_Dark_Grey.svg" />
            </StyledBundleHeader>
            <p>Includes Hulu (plan of your choice), Disney+, and ESPN+.</p>
            <Switch
                toggle={toggle}
                isOn={isOn}
            />
        </StyledBundle>
    );
}



const Switch = ({ toggle, isOn }) => {
    return (
        <StyledSwitch onClick={toggle}>
            <StyledSwitchRack isOn={isOn} />
            <StyledSwitchKnob isOn={isOn} />
        </StyledSwitch>
    );
}