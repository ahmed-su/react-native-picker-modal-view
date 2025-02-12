import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SelectBoxStyle } from '../Assets/Styles';
export class SelectBoxComponent extends React.PureComponent {
    render() {
        const { openModal, selectedObject, chooseText, disabled, renderSelectView, items } = this.props;
        const selectViewIsDisabled = (disabled || !items || items.length === 0);
        if (renderSelectView) {
            return (renderSelectView(selectViewIsDisabled, selectedObject, openModal.bind(this)));
        }
        return (React.createElement(TouchableOpacity, { activeOpacity: 0.7, onPress: () => openModal(), style: [SelectBoxStyle.pressBtn, selectViewIsDisabled && SelectBoxStyle.disabledBtn] },
            React.createElement(View, { style: SelectBoxStyle.container },
                React.createElement(Text, { style: [selectViewIsDisabled ? SelectBoxStyle.disabledTxt : SelectBoxStyle.chooseText] }, (selectedObject && selectedObject.airport_name) ? selectedObject.airport_name : chooseText),
                React.createElement(Image, { source: require('../Assets/Images/down.png'), style: [SelectBoxStyle.downBtn, selectViewIsDisabled && SelectBoxStyle.disabledImage] }))));
    }
}
//# sourceMappingURL=SelectBox.js.map
