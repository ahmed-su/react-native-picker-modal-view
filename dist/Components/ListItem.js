import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { ListItemStyle } from '../Assets/Styles';
export class ListItemComponent extends React.PureComponent {
    render() {
        const { onSelectMethod, defaultSelected, list: { airport_name } } = this.props;
        return (React.createElement(TouchableOpacity, { style: ListItemStyle.container, activeOpacity: 0.7, onPress: () => onSelectMethod(this.props.list) },
            React.createElement(View, { style: ListItemStyle.btnContainer },
                React.createElement(Text, { style: [(defaultSelected && airport_name === defaultSelected.airport_name) && ListItemStyle.selected] }, airport_name))));
    }
}
//# sourceMappingURL=ListItem.js.map
