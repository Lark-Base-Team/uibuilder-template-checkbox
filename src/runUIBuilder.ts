//@ts-nocheck
export default async function main(uiBuilder) {
    uiBuilder.form((form) => ({
        formItems: [
            form.checkboxGroup('checkbox', { label: '选择水果', options: ['Apple', 'Orange'], defaultValue: ['Apple'] }),
        ],
        buttons: ['确定', '取消'],
    }), async ({ values }) => {
        const { checkbox } = values;
    });
}