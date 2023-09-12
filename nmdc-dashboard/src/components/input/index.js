import Input from './input';
import Textarea from './textarea';
import DatePicker from './datepicker';
import { withLabel } from './hoc';

const InputWithLabel = withLabel(Input);
const TextareaWithLabel = withLabel(Textarea);
const DatePickerWithLabel = withLabel(DatePicker);

export {
	Input,
	Textarea,
	DatePicker,
	InputWithLabel,
	TextareaWithLabel,
	DatePickerWithLabel,
};
