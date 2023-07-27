import { LightningElement, api } from 'lwc';
import screenFlowModal from 'c/screenFlowModal';

export default class OpenScreenFlowModal extends LightningElement {
	@api screen_flow_name;

	connectedCallback() {
        screenFlowModal.open({
            size: 'large',
            description: 'be more descriptive here',
            content: 'Content Name',
			screen_flow_name: this.screen_flow_name
        });
    }
}