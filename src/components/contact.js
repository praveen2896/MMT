import React from 'react'
import { MDBTooltip } from 'mdbreact'

const TooltipsPage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <MDBTooltip
        placement="bottom"
        componentClass="btn btn-primary"
        tag="div"
        component="button"
        tooltipContent="MDBTooltip on top"
      >
        MDBTooltip on top
      </MDBTooltip>
      <MDBTooltip
        placement="right"
        componentClass="btn btn-primary"
        tag="div"
        component="button"
        tooltipContent="MDBTooltip on right"
      >
        MDBTooltip on right
      </MDBTooltip>
      <MDBTooltip
        placement="bottom"
        componentClass="btn btn-primary"
        tag="div"
        component="button"
        tooltipContent="MDBTooltip on bottom"
      >
        MDBTooltip on bottom
      </MDBTooltip>
      <MDBTooltip
        placement="left"
        componentClass="btn btn-primary"
        tag="div"
        component="button"
        tooltipContent="MDBTooltip on left"
      >
        MDBTooltip on left
      </MDBTooltip>
    </div>
  )
}

export default TooltipsPage
