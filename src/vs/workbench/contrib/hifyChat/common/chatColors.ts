/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Color, RGBA } from '../../../../base/common/color.js';
import { localize } from '../../../../nls.js';
import { badgeBackground, badgeForeground, contrastBorder, editorBackground, editorSelectionBackground, editorWidgetBackground, foreground, registerColor, transparent } from '../../../../platform/theme/common/colorRegistry.js';

export const chatRequestBorder = registerColor(
	'hify.chat.requestBorder',
	{ dark: new Color(new RGBA(255, 255, 255, 0.10)), light: new Color(new RGBA(0, 0, 0, 0.10)), hcDark: contrastBorder, hcLight: contrastBorder, },
	localize('hify.chat.requestBorder', 'The border color of a chat request.')
);

export const chatRequestBackground = registerColor(
	'hify.chat.requestBackground',
	{ dark: transparent(editorBackground, 0.62), light: transparent(editorBackground, 0.62), hcDark: editorWidgetBackground, hcLight: null },
	localize('hify.chat.requestBackground', 'The background color of a chat request.')
);

export const chatSlashCommandBackground = registerColor(
	'hify.chat.slashCommandBackground',
	{ dark: '#26477866', light: '#adceff7a', hcDark: Color.white, hcLight: badgeBackground },
	localize('hify.chat.slashCommandBackground', 'The background color of a chat slash command.')
);

export const chatSlashCommandForeground = registerColor(
	'hify.chat.slashCommandForeground',
	{ dark: '#85b6ff', light: '#26569e', hcDark: Color.black, hcLight: badgeForeground },
	localize('hify.chat.slashCommandForeground', 'The foreground color of a chat slash command.')
);

export const chatAvatarBackground = registerColor(
	'hify.chat.avatarBackground',
	{ dark: '#1f1f1f', light: '#f2f2f2', hcDark: Color.black, hcLight: Color.white, },
	localize('hify.chat.avatarBackground', 'The background color of a chat avatar.')
);

export const chatAvatarForeground = registerColor(
	'hify.chat.avatarForeground',
	foreground,
	localize('hify.chat.avatarForeground', 'The foreground color of a chat avatar.')
);

export const chatEditedFileForeground = registerColor(
	'hify.chat.editedFileForeground',
	{
		light: '#895503',
		dark: '#E2C08D',
		hcDark: '#E2C08D',
		hcLight: '#895503'
	},
	localize('hify.chat.editedFileForeground', 'The foreground color of a chat edited file in the edited file list.')
);

export const chatRequestCodeBorder = registerColor('hify.chat.requestCodeBorder', { dark: '#004972B8', light: '#0e639c40', hcDark: null, hcLight: null }, localize('hify.chat.requestCodeBorder', 'Border color of code blocks within the chat request bubble.'), true);

export const chatRequestBubbleBackground = registerColor('hify.chat.requestBubbleBackground', { light: transparent(editorSelectionBackground, 0.3), dark: transparent(editorSelectionBackground, 0.3), hcDark: null, hcLight: null }, localize('hify.chat.requestBubbleBackground', "Background color of the chat request bubble."), true);

export const chatRequestBubbleHoverBackground = registerColor('hify.chat.requestBubbleHoverBackground', { dark: transparent(editorSelectionBackground, 0.6), light: transparent(editorSelectionBackground, 0.6), hcDark: null, hcLight: null }, localize('hify.chat.requestBubbleHoverBackground', 'Background color of the chat request bubble on hover.'), true);

export const chatCheckpointSeparator = registerColor('hify.chat.checkpointSeparator',
	{ dark: '#585858', light: '#a9a9a9', hcDark: '#a9a9a9', hcLight: '#a5a5a5' },
	localize('chatCheckpointSeparator', "Chat checkpoint separator color."));

export const chatLinesAddedForeground = registerColor(
	'hify.chat.linesAddedForeground',
	{ dark: '#54B054', light: '#107C10', hcDark: '#54B054', hcLight: '#107C10' },
	localize('hify.chat.linesAddedForeground', 'Foreground color of lines added in chat code block pill.'), true);

export const chatLinesRemovedForeground = registerColor(
	'hify.chat.linesRemovedForeground',
	{ dark: '#FC6A6A', light: '#BC2F32', hcDark: '#F48771', hcLight: '#B5200D' },
	localize('hify.chat.linesRemovedForeground', 'Foreground color of lines removed in chat code block pill.'), true);
