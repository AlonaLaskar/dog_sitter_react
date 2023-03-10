
import styled from 'styled-components';
import { IonContent } from '@ionic/react';

const StyledAttendaceClock = styled(IonContent).attrs({className: 'ion-padding'})`

display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 20px;
  width: auto; 

  .contener{

   align-items: center;
   margin: auto;
    width: '75%';
    height: '75%';
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 1cm;

    .payment{
        margin: 10px;
      font-family: 'Heebo';
      

    }
    .label-floating.sc-ion-label-ios-h{
        font-family: 'Heebo';
        margin: 10px;
        margin-bottom: 15px;
        background-color:red ;
        
    }
    ion-label#ion-input-3-lbl {
    line-height: 16px;
    float: right;
    //transition: all 0.3s ease-in-out;
    font-family: 'Heebo';
    margin: 25px;
    //background-color: red;
    


  }
    
     
    .native-input.sc-ion-input-md {
    flex-basis: auto;
    line-height: 16px;
    transition: all 0.3s ease-in-out;
    font-family: 'Heebo'; 
} 
.button{
    margin: 10px;
    width: 35%;
    height: 50px;
    border-radius: 10px;
    border: 1px solid black;
    background-color: #f2f2f2;
    font-family: 'Heebo';
    color: ${({ theme }) => theme.colors.forms?.text};
}

       
  }
`;

export default StyledAttendaceClock;
