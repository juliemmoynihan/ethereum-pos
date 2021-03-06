import React from 'react';
import { storiesOf, withInfo } from '../../stories';

import DailyTotal from './DailyTotal';

import fixedPositionContainer from '../../utils/fixedPositionContainer';

storiesOf('DailyTotal')

	.addDecorator(fixedPositionContainer(({ height: 100 })))

	.addDecorator((story, context) => withInfo(DailyTotal.description)(story)(context))

	.add('base', () => (
		<DailyTotal total="123.45" symbol="GRM" />
	));
