import { showSuccess, showWarning, showError, showInfo, showMessage } from '@nextcloud/dialogs'

import * as AppConfig from './appconfig'
import * as Comments from './comments'
import Loader from './loader'
import { loadState } from '@nextcloud/initial-state'
import Collaboration from './collaboration'
import * as WhatsNew from './whatsnew'

/** @namespace OCP */
export default {
	AppConfig,
	Collaboration,
	Comments,
	InitialState: {
		/**
		 * @deprecated 18.0.0 add https://www.npmjs.com/package/@nextcloud/initial-state to your app
		 */
		loadState,
	},
	Loader,
	/**
	 * @deprecated 19.0.0 use the `@nextcloud/dialogs` package instead
	 */
	Toast: {
		/**
		 * @deprecated 19.0.0 use `showSuccess` from the `@nextcloud/dialogs` package instead
		 */
		success: showSuccess,
		/**
		 * @deprecated 19.0.0 use `showWarning` from the `@nextcloud/dialogs` package instead
		 */
		warning: showWarning,
		/**
		 * @deprecated 19.0.0 use `showError` from the `@nextcloud/dialogs` package instead
		 */
		error: showError,
		/**
		 * @deprecated 19.0.0 use `showInfo` from the `@nextcloud/dialogs` package instead
		 */
		info: showInfo,
		/**
		 * @deprecated 19.0.0 use `showMessage` from the `@nextcloud/dialogs` package instead
		 */
		message: showMessage,
	},
	WhatsNew,
}
