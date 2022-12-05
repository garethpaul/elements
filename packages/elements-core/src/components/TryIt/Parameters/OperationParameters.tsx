import { Panel } from '@stoplight/mosaic';
import { Box } from '@twilio-paste/core/box';
import * as React from 'react';

import { ParameterSpec } from './parameter-utils';
import { ParameterEditor } from './ParameterEditor';

interface OperationParametersProps<P extends keyof any = string> {
  parameters: readonly ParameterSpec[];
  values: Record<P, string>;
  onChangeValue: (parameterName: P, newValue: string) => void;
  validate?: boolean;
}

export const OperationParameters: React.FC<OperationParametersProps> = ({
  parameters,
  values,
  onChangeValue,
  validate,
}) => {
  return (
    <Box
      style={{
        backgroundColor: '#0d131c',
      }}
    >
      <Panel.Titlebar>Parameters</Panel.Titlebar>
      <Panel.Content className="sl-overflow-y-auto ParameterGrid OperationParametersContent">
        {parameters.map(parameter => (
          <ParameterEditor
            key={parameter.name}
            parameter={parameter}
            value={values[parameter.name]}
            onChange={(value: string | number) => onChangeValue(parameter.name, String(value))}
            validate={validate}
            isOptional={false}
            canChangeOptional={false}
            onChangeOptional={() => {}}
          />
        ))}
      </Panel.Content>
    </Box>
  );
};
