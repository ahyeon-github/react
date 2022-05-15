import {Component} from "react";
import Modal from "react-modal";
import ''

class VoteModal extends Component {

    render() {
        return (
            <Modal isOpen={this.props.isOpen}
                   style={{
                       content: {
                           position: 'absolute',
                           width: 342,
                           height: 218,
                           left: 'calc(50% - 171px)',
                           margin: 'auto',
                           padding: 0,
                           borderRadius: 8
                       }
                   }}
            >
                <div>
                    <div className='vote-modal-text'>
                        <div>
                            .<br/>
                            이 기분으로 선택할까요?
                        </div>
                    </div>
                    <div className='vote-modal-button'>
                        <div className='button vote-modal-cancel-button' onClick={this.props.onClickCancel}>
                            <div>바꿀래요</div>
                        </div>
                        <div className='button vote-modal-accept-button' onClick={this.props.onClickAccept}>
                            <div>좋아요!</div>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default VoteModal;
