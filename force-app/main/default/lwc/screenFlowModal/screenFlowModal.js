import { api } from 'lwc';
import LightningModal from 'lightning/modal';

export default class ScreenFlowModal extends LightningModal {
	@api screen_flow_name;

	handleStatusChange(event) {
		if (event.detail.status === 'FINISHED') {
			// set behavior after a finished flow interview
			this.close('success');
		}
	}
}