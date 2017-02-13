import React from 'react';

class KaKao extends React.Component {
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


export default KaKao;