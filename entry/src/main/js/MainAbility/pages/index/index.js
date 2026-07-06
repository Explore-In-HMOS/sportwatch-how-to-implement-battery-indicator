import batteryHelper from '../../common/helpers/batteryHelper';

export default {
    data: {
        batteryLevel: 0,
        batteryIcon: ''
    },

    onInit() {
        batteryHelper.updateStatus(this);
    }
}
