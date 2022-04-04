import React, { useState } from 'react';
import LargeButton from '../buttons/LargeButton';

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
    StyledSwitch,
    StyledBadge,
    StyledPlanColumnHeader,
    StyledPlanTableRow,
    StyledPlanTableCell,
} from './style';
import plan from '../../assets/data/plan';
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
                <div>

                </div>
                <StyledPlanTable>
                    <StyledPlanTableHeader>
                        <Bundle
                            isOn={isOn}
                            toggle={toggle}
                        />
                        <PlanColumnHeader
                            badge="MOST POPULAR"
                            extra="30 DAY FREE TRIAL"
                            title="Hulu"
                            price="$6.99/MONTH"
                        />
                        <PlanColumnHeader
                            extra="30 DAY FREE TRIAL"
                            title="Hulu (No Ads)"
                            price="$12.99/MONTH"
                            darkBg={true}
                        />
                        <PlanColumnHeader
                            extra="DISNEY+, ESPN+,"
                            title="Hulu + Live TV"
                            price="$69.99/MONTH"
                        />
                    </StyledPlanTableHeader>
                    <StyledPlanTableRow>
                        <StyledPlanTableCell
                            small={true}
                            left={true}
                        >
                            Monthly price
                        </StyledPlanTableCell>
                        <StyledPlanTableCell>
                            $6.99/mo
                        </StyledPlanTableCell>
                        <StyledPlanTableCell darkBg={true}>
                            $12.99/mo
                        </StyledPlanTableCell>
                        <StyledPlanTableCell>
                            $69.99/mo
                        </StyledPlanTableCell>
                    </StyledPlanTableRow>
                    {
                        plan.map((planRow, planRowIndex) => (
                            <Row row={planRow} key={planRowIndex} />
                        ))
                    }
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

const PlanColumnHeader = ({ darkBg = false, badge, extra, title, price, onClick = () => { } }) => {
    return (
        <StyledPlanColumnHeader darkBg={darkBg}>
            {badge && <StyledBadge>{badge}</StyledBadge>}
            <p>{extra}</p>
            <p><em>{title}</em></p>
            <LargeButton
                onClick={onClick}
                text={price}
                color="black"
                padding={15}
                full={true}
                transition={true}
            />
        </StyledPlanColumnHeader>
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

const Row = ({ row }) => {
    return (
        <StyledPlanTableRow>
            <StyledPlanTableCell
                small={true}
                left={true}
            >
                {row.title.txt}
                {row.title.i && <img src="/plan-table/i.svg" />}
            </StyledPlanTableCell>
            <StyledPlanTableCell light={true}>
                {row.plan1 ? <img src="/plan-table/check.svg" /> : "—"}
            </StyledPlanTableCell>
            <StyledPlanTableCell darkBg={true} light={true}>
                {row.plan2 ? <img src="/plan-table/check.svg" /> : "—"}
            </StyledPlanTableCell>
            <StyledPlanTableCell light={true}>
                {row.plan3 ? <img src="/plan-table/check.svg" /> : "—"}
            </StyledPlanTableCell>
        </StyledPlanTableRow>
    );
}