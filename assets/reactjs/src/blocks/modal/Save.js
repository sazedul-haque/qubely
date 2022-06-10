import classnames from "classnames";
const { RichText, InnerBlocks } = wp.blockEditor;
const {
	HelperFunction: { animationAttr, IsInteraction },
} = wp.qubelyComponents;

const Save = (props) => {
    const {
        attributes: {
            uniqueId,
            customClassName,
            animation,
            interaction,
            modalLinkText,
            modalTitleText,
            showModal,
        },
        setAttributes,
    } = props;
    const interactionClass = IsInteraction(interaction) ? "qubley-block-interaction" : "";
    const classNames = classnames({ [`qubely-block-${uniqueId}`]: uniqueId }, customClassName);

    console.log(showModal);

    return (
        <div className={classNames} {...animationAttr(animation)}>
            <div className={`qubely-block-modal-wrapper ${interactionClass}`}>
                <div className={`qubely-block-modal`}>
                    <div className={`qubely-block-modal-link-wrap`}>
                        {/* <button onClick={() => setAttributes({ showModal: true })} className={`qubely-block-modal-link`}> */}
                        <button className={`qubely-block-modal-link`}>
                            <RichText.Content
                                value={modalLinkText}
                                className="qubely-modal-link-text"
                            />
                        </button>
                    </div>
                    <div className={`qubely-modal-popup ${showModal ? 'display-block' : 'display-none'}`}>
                        <div className={`qubely-modal-box`}>
                            {/* <button onClick={() => console.log('here')} className={`qubely-block-modal-close-btn`}> */}
                            <button className={`qubely-block-modal-close-btn`}>
                                <i className={`qubely-btn-icon far fa-window-close`} />
                            </button>
                            <div className={`qubely-block-modal-inner-blocks`}>
                                <h2 className={`qubely-block-modal-title`}>
                                    <RichText.Content
                                        value={modalTitleText}
                                        className="qubely-modal-title-text"
                                    />
                                </h2>
                                <div className={`qubely-block-modal-content`}>
                                    <InnerBlocks.Content />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Save;