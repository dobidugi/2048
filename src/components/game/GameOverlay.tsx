import React from 'react'
import styled from 'styled-components';
import { data } from '../../data';
import BaseProps from '../../interface/BaseProps'
import Button from '../Button';
import Overlay from './Overlay';

const Ment = styled.h1`
    font-size: 4em;
    color: ${props => props.color};
`;

interface GameOverlayProps extends BaseProps {
    flag: boolean;
    /*
    flag -> false -> game lose
    flag -> true -> game win
    */
}
function GameOverlay(props: GameOverlayProps) {
    const { className, flag } = props;

    if (!flag) { // game lose
        return (
            <div className={className}>
                <Ment color={"#766E65"} className={"overlay_txt"}>{data.GameOver.ment}</Ment>
                <Button className={"overlay_txt"} text={String(data.GameOver.button)} />
                <Overlay color={"white"} />
            </div>
        )
    } else { // game win
        return (
            <div className={className}>
                <Ment color={"white"} className={"overlay_txt"}>{data.GameWin.ment}</Ment>
                <Overlay color={"yellow"} />
            </div>
        )
    }

}

export default styled(React.memo(GameOverlay))` 
    position: absolute;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: fadein 3s;
    .overlay_txt {
        z-index: 2;
    }

    
    @keyframes fadein {
        0% { opacity : 0;}
        100% { opacity: 100;}
    }
    
`
