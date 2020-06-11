export default [
    {
        key: 'dataColumns',
        columns: [
            {
                componnets: [
                    {
                        key: 'multiple',
                        ignore: true,
                    },
                    {
                        type: 'address',
                        label: 'Default Value',
                        key: 'defaultValue',
                        weight: 5,
                        placeholder: 'Default Value',
                        tooltip: 'The will be the value for this field, before user interaction. Having a default value will override the placeholder text.',
                        input: true,
                        customDefaultValue: function (_a) {
                            var instance = _a.instance;
                            return (instance.manualModeEnabled
                                ? {
                                    mode: 'autocomplete',
                                    address: {},
                                }
                                : {});
                        },
                    },
                ],
            },
        ],
    },
];