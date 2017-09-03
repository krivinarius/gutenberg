/**
 * External dependencies
 */
import { connect } from 'react-redux';

/**
 * WordPress Dependencies
 */
import { withFocusReturn } from '@wordpress/components';

/**
 * Internal Dependencies
 */
import './style.scss';
import PostSettings from './post-settings';
import BlockInspector from './block-inspector';
import Header from './header';
import SidebarMetaboxes from '../metaboxes/sidebar.js';
import { getActivePanel } from '../selectors';

const Sidebar = ( { panel } ) => {
	return (
		<div className="editor-sidebar">
			<Header />
			{ panel === 'document' && [
				<PostSettings key="settings" />,
				<SidebarMetaboxes key="metabox" location="side" id="gutenberg-metabox-iframe-sidebar" />,
			] }
			{ panel === 'block' && <BlockInspector /> }
		</div>
	);
};

export default connect(
	( state ) => {
		return {
			panel: getActivePanel( state ),
		};
	}
)( withFocusReturn( Sidebar ) );
