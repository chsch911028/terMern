import React from 'react';
import { connect } from 'react-redux';
import Button from 'muicss/lib/react/button';


class kaKao extends React.Component {
		constructor(props) {
			super(props);
			
		}

		handleClick(){
				alert('KAKAO!!');
		}


		render(){
			let style = {backgroundColor:'#fdd835'};
			return (
					<div>
							<Button variant='raised' style={style} onClick={this.props.kakaopay}>Buy now with KAKAO PAY!!</Button>
					</div>
			);		
		}
}

let mapStateToProps = function(state){
	return {
		videoreducer: state.videoreducer
	}
}

const KaKao = connect(
  mapStateToProps
)(kaKao)


export default KaKao;