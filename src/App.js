import React from 'react';
import GlobalStyles from './GlobalStyles';
import Screen from './Screen';

class App extends React.Component {
	render() {
		return (
			<>
				<GlobalStyles />
        <Screen />
			</>
		);
	}
}

export default App;
