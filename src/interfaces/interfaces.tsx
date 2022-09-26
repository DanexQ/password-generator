export type DataForm = {
  passwordLength: number;
  includeUpper: true | false;
  includeLower: true | false;
  includeNumbers: true | false;
  includeSymbols: true | false;
};

export interface DataFormObj {
  dataForm: DataForm;
}
