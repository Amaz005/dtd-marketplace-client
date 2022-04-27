import {Alert , AlertIcon, AlertTitle, CloseButton, Slide } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"

export interface AlertProps{
    status: "info" | "warning" | "success" | "error" | undefined,
    message: string,
    onToggle: () => void, 
    isOpen: boolean, 
}

const AlertComponent: React.FC<AlertProps> = (props) => {

    return (
      <>
        <Slide in={props.isOpen} direction='right' style={{zIndex: 10, maxWidth: "400px", top: "70px"}}>
            <Alert status={props.status}>
                <AlertIcon />
                <AlertTitle mr={2}>{props.message}</AlertTitle>
                <CloseButton position='absolute' right='8px' top='8px' onClick={props.onToggle}/>
            </Alert>
        </Slide>
      </>
    )
  }

export default AlertComponent
