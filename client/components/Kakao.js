import React from 'react';
import { connect } from 'react-redux';

class kaKao extends React.Component {
		constructor(props) {
			super(props);
			
		}

		handleClick(){
				alert('KAKAO!!');
		}


		render(){
			return (
					<div>
							<button onClick={this.props.kakaopay}>Buy now with KAKAO PAY!!</button>
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