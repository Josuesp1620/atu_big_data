import ControlLayers from "@/components/control/MapControlLayer";
import * as E from "@/components/elements";
import { EraserIcon, GearIcon, HomeIcon, PersonIcon, QuestionMarkCircledIcon } from '@radix-ui/react-icons'
import { clsx } from "clsx";
import React from "react";


export default function HeaderMapComponent({ setShowPanel, showPanel, screenWidth, setApplyTransition }:{ setShowPanel: any, showPanel : any, screenWidth : any, setApplyTransition : any }) {

    const cleanMap = () => {
        console.log("CLEAN MAP")
    }

    return (
        <div className="absolute flex items-center justify-between z-50" style={{width:"100%"}}>
             <div className={clsx(
                'pt-2 z-50 mx-3',
                { 'flex': screenWidth > 1290 }
                )}>
            <a target="_blank" href="https://www.gob.pe/mtc">
                <img src="/img/mapa/mtc.png" alt="Logo MTC" style={{ height: "35px" }} />
            </a>

            <a target="_blank" href="https://www.atu.gob.pe/">
                <img src="/img/mapa/logoatte.png" alt="Logo ATU" style={{ height: "30px", margin: "5px" }}/>
            </a>
            </div>

            <div className={clsx(
                            'flex items-center z-50 buttons-center ',
                            { 'move-margin-right': screenWidth < 1290 }
                            )}>
                <E.Button size="md" variant="primary" className="mr-2" onClick={() =>{
                    setShowPanel(!showPanel)
                    setApplyTransition(true);

                    setTimeout(() => setApplyTransition(false), 500);
                }}>
                    <PersonIcon></PersonIcon>
                    Análisis de viajes
                </E.Button>
                <E.Button size="md" variant="primary">
                    <svg width="17" height="17" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 19L3.78974 20.7368C3.40122 20.8663 3 20.5771 3 20.1675L3 5.43246C3 5.1742 3.16526 4.94491 3.41026 4.86325L9 3M9 19L15 21M9 19L9 3M15 21L20.5897 19.1368C20.8347 19.0551 21 18.8258 21 18.5675L21 3.83246C21 3.42292 20.5988 3.13374 20.2103 3.26325L15 5M15 21L15 5M15 5L9 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Perfil de viajero
                </E.Button>
                <E.Button size="md" variant="primary" onClick={cleanMap}>
                    <EraserIcon></EraserIcon>
                    Limpiar Mapa
                </E.Button>
                <E.Button size="md" variant="primary">
                    <HomeIcon></HomeIcon>
                    Portada
                </E.Button>
                <E.Button size="md" variant="primary">
                    <QuestionMarkCircledIcon></QuestionMarkCircledIcon>
                    Ayuda
                </E.Button>
                <E.Button size="md" variant="primary">
                    <GearIcon></GearIcon>
                    Soporte
                </E.Button>
            </div>

            <div className="flex mx-3">
                <ControlLayers />
            </div>
        </div>
        
    );
}
