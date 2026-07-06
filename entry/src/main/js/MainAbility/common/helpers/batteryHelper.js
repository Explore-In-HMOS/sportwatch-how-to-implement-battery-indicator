import battery from '@system.battery';

const ICON_BASE_PATH = '/common/icons';
const ICON_STEP = 10;

export default {
    updateStatus(viewModel) {
        battery.getStatus({
            success: (status) => {
                const levelPercent = Math.round(status.level * 100);
                viewModel.batteryLevel = levelPercent;
                viewModel.batteryIcon = this.resolveIcon(levelPercent, 'dark');
            },
            fail: (data, code) => {
                console.error(`battery.getStatus failed, code: ${code}, data: ${data}`);
            }
        });
    },

    resolveIcon(levelPercent, theme) {
        const step = Math.round(levelPercent / ICON_STEP) * ICON_STEP;
        return `${ICON_BASE_PATH}/${theme}/battery_${step}.png`;
    }
};