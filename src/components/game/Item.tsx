import React from 'react'
import styled from 'styled-components';
import BaseProps from '../../interface/BaseProps'

interface ItemProps extends BaseProps {
    value?: number;
}

const Value = styled.b`
    font-size: 2em;
    
`

function Item(props: ItemProps) {
    const { className, value } = props;
    return (
        <div className={className} data-value={value}>
            <Value data-value={value}>{value !== 0 ? value : ""}</Value>
        </div>
    )
}

export default styled(Item)`
    display: flex;
    align-items: ceenter;
    justify-content: center;
    
    margin: auto;
`;
