import React, { forwardRef } from 'react'
import MaterialTable from 'material-table'
import { Button } from '@material-ui/core'
import { 
  AddBox,
  Clear,
  Search,
  FirstPage,
  LastPage,
  ChevronRight,
  ChevronLeft,
  ArrowDownward,
  Remove,
  ViewColumn} from '@material-ui/icons'
  import { timeoff } from '../off'
  import { useHistory } from 'react-router-dom'

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

const TimeOff = (props) => {
  let history = useHistory()

const handleClick = (id) => {
    props.clicked(id)
    history.push('/timeoff')
}



  return (
    <MaterialTable
      icons={tableIcons}
      localization={{
        header: {
          actions: 'Actions', 

        },
       
       }}
      title="All Employees"
      columns={[
        { title: 'Requestor', field: 'Name',
        headerStyle: {
          backgroundColor: '#6C6FA5',
          color: '#ffffff'
        }
        },
        { title: 'Time Off Dates', field: 'dateoff' ,
        headerStyle: {
          backgroundColor: '#6C6FA5',
          color: '#ffffff'
        }
      },
        { title: 'Vacation Time Remaining', field: 'hoursleft',
        headerStyle: {
          backgroundColor: '#6C6FA5',
          color: '#ffffff'
        }
      },
      
      
      ]}
      data={timeoff}
      actions={[
        
        {
          
          icon: props => (

            <Button
              onClick={(event) => props.action.onClick(event, props.data)}
              color= "primary"
              variant="contained"
              style={{backgroundColor: 'red'}} //Can add button styling here
              size="small"
            >
              Deny
            </Button>),
          tooltip: 'Deny Request',
          onClick: (event, rowData) => handleClick(rowData.ID)
        },
        {
          icon: props => (
            <Button
              onClick={(event) => props.action.onClick(event, props.data)}
              color="secondary"
              variant="contained"
              style={{backgroundColor: 'green'}} //Can add button styling here
              size="small"
            >
              Approve
              </Button>),
          tooltip: 'Approve Request',
          onClick: (event, rowData) => handleClick(rowData.ID)
        }
      ]}
      options={{
        actionsColumnIndex: -1,
        headerStyle: {
          backgroundColor: '#6C6FA5',
          color: '#ffffff'
      }}}
      
    />
  )
}




  



export default TimeOff
