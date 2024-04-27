import { useEffect, Fragment } from "react";
import type { ClassKey } from "keycloakify/login/TemplateProps";
import { clsx } from "keycloakify/tools/clsx";
import {
    useUserProfileForm,
    type KcContextLike,
    type FormAction,
    type FormFieldError,
    FormFieldState
} from "keycloakify/login/lib/useUserProfileForm";
import type { Attribute, LegacyAttribute } from "keycloakify/login/kcContext/KcContext";
import type { I18n } from "../../i18n";
import { assert } from "tsafe/assert";

export type UserProfileFormFieldsProps = {
    kcContext: KcContextLike;
    i18n: I18n;
    getClassName: (classKey: ClassKey) => string;
    onIsFormSubmittableValueChange: (isFormSubmittable: boolean) => void;
    BeforeField?: (props: BeforeAfterFieldProps) => JSX.Element | null;
    AfterField?: (props: BeforeAfterFieldProps) => JSX.Element | null;
};

type BeforeAfterFieldProps = {
    attribute: Attribute;
    index: number;
    value: string;
    dispatchFormAction: React.Dispatch<FormAction>;
    formFieldErrors: FormFieldError[];
    i18n: I18n;
};

// NOTE: Enabled by default but it's a UX best practice to set it to false.
const doMakeUserConfirmPassword = true;

export function UserProfileFormFields(props: UserProfileFormFieldsProps) {
    const { kcContext, onIsFormSubmittableValueChange, i18n, getClassName, BeforeField, AfterField } = props;

    const { advancedMsg, msg } = i18n;

    const {
        formState: { formFieldStates, isFormSubmittable },
        dispatchFormAction
    } = useUserProfileForm({
        kcContext,
        i18n,
        doMakeUserConfirmPassword
    });

    useEffect(() => {
        onIsFormSubmittableValueChange(isFormSubmittable);
    }, [isFormSubmittable]);

    let currentGroupName = "";

    return (
        <>
            {formFieldStates.map(({ index, value, attribute, displayableErrors }) => {
                const formGroupClassName = clsx(
                    getClassName("kcFormGroupClass"),
                    displayableErrors.length !== 0 && getClassName("kcFormGroupErrorClass")
                );

                return (
                    <Fragment key={`${attribute.name}-${index}`}>
                        {(() => {
                            keycloak_prior_to_24: {
                                if (attribute.html5DataAnnotations !== undefined) {
                                    break keycloak_prior_to_24;
                                }

                                const { group = "", groupDisplayHeader = "", groupDisplayDescription = "" } = attribute as any as LegacyAttribute;

                                return (
                                    group !== currentGroupName &&
                                    (currentGroupName = group) !== "" && (
                                        <div className={formGroupClassName}>
                                            <div className={getClassName("kcContentWrapperClass")}>
                                                <label id={`header-${group}`} className={getClassName("kcFormGroupHeader")}>
                                                    {advancedMsg(groupDisplayHeader) || currentGroupName}
                                                </label>
                                            </div>
                                            {groupDisplayDescription !== "" && (
                                                <div className={getClassName("kcLabelWrapperClass")}>
                                                    <label id={`description-${group}`} className={getClassName("kcLabelClass")}>
                                                        {advancedMsg(groupDisplayDescription)}
                                                    </label>
                                                </div>
                                            )}
                                        </div>
                                    )
                                );
                            }

                            if (attribute.group?.name !== currentGroupName) {
                                currentGroupName = attribute.group?.name ?? "";

                                if (currentGroupName !== "") {
                                    assert(attribute.group !== undefined);

                                    return (
                                        <div
                                            className={getClassName("kcFormGroupClass")}
                                            {...Object.fromEntries(
                                                Object.entries(attribute.group.html5DataAnnotations).map(([key, value]) => [`data-${key}`, value])
                                            )}
                                        >
                                            {(() => {
                                                const groupDisplayHeader = attribute.group.displayHeader ?? "";
                                                const groupHeaderText =
                                                    groupDisplayHeader !== "" ? advancedMsg(groupDisplayHeader) : attribute.group.name;

                                                return (
                                                    <div className={getClassName("kcContentWrapperClass")}>
                                                        <label id={`header-${attribute.group.name}`} className={getClassName("kcFormGroupHeader")}>
                                                            {groupHeaderText}
                                                        </label>
                                                    </div>
                                                );
                                            })()}
                                            {(() => {
                                                const groupDisplayDescription = attribute.group.displayDescription ?? "";

                                                if (groupDisplayDescription !== "") {
                                                    const groupDescriptionText = advancedMsg(groupDisplayDescription);

                                                    return (
                                                        <div className={getClassName("kcLabelWrapperClass")}>
                                                            <label
                                                                id={`description-${attribute.group.name}`}
                                                                className={getClassName("kcLabelClass")}
                                                            >
                                                                {groupDescriptionText}
                                                            </label>
                                                        </div>
                                                    );
                                                }

                                                return null;
                                            })()}
                                        </div>
                                    );
                                }
                            }

                            return null;
                        })()}

                        {BeforeField && (
                            <BeforeField
                                attribute={attribute}
                                index={index}
                                value={value}
                                dispatchFormAction={dispatchFormAction}
                                formFieldErrors={displayableErrors}
                                i18n={i18n}
                            />
                        )}

                        <div
                            className={formGroupClassName}
                            style={{
                                "display": attribute.name === "password-confirm" && !doMakeUserConfirmPassword ? "none" : undefined
                            }}
                        >
                            <div className={getClassName("kcLabelWrapperClass")}>
                                <label htmlFor={attribute.name} className={getClassName("kcLabelClass")}>
                                    {advancedMsg(attribute.displayName ?? "")}
                                </label>
                                {attribute.required && <>*</>}
                            </div>
                            <div className={getClassName("kcInputWrapperClass")}>
                                {attribute.annotations.inputHelperTextBefore !== undefined && index === 0 && (
                                    <div
                                        className={getClassName("kcInputHelperTextBeforeClass")}
                                        id={`form-help-text-before-${attribute.name}`}
                                        aria-live="polite"
                                    >
                                        {advancedMsg(attribute.annotations.inputHelperTextBefore)}
                                    </div>
                                )}
                                <InputFiledByType
                                    attribute={attribute}
                                    index={index}
                                    value={value}
                                    formValidationDispatch={dispatchFormAction}
                                    getClassName={getClassName}
                                    i18n={i18n}
                                />
                                {attribute.multivalued && (
                                    <AddRemoveButtonsMultiValuedAttribute
                                        formFieldStates={formFieldStates}
                                        attribute={attribute}
                                        index={index}
                                        dispatchFormAction={dispatchFormAction}
                                        i18n={i18n}
                                    />
                                )}
                                {displayableErrors.length !== 0 && (
                                    <span
                                        id={`input-error-${attribute.name}${index === 0 ? "" : `-${index + 1}`}`}
                                        className={getClassName("kcInputErrorMessageClass")}
                                        style={{
                                            "position": displayableErrors.length === 1 ? "absolute" : undefined
                                        }}
                                        aria-live="polite"
                                    >
                                        {displayableErrors.map(({ errorMessage }, i, arr) => (
                                            <>
                                                <span key={i}>{errorMessage}</span>
                                                {arr.length - 1 !== i && <br />}
                                            </>
                                        ))}
                                    </span>
                                )}
                                {attribute.annotations.inputHelperTextAfter !== undefined && index === 0 && (
                                    <div
                                        className={getClassName("kcInputHelperTextAfterClass")}
                                        id={`form-help-text-before-${attribute.name}`}
                                        aria-live="polite"
                                    >
                                        {advancedMsg(attribute.annotations.inputHelperTextAfter)}
                                    </div>
                                )}

                                {AfterField && (
                                    <AfterField
                                        attribute={attribute}
                                        index={index}
                                        value={value}
                                        dispatchFormAction={dispatchFormAction}
                                        formFieldErrors={displayableErrors}
                                        i18n={i18n}
                                    />
                                )}
                                {/* 
                        TODO: 

                        	<#list profile.html5DataAnnotations?keys as key>
		                        <script type="module" src="${url.resourcesPath}/js/${key}.js"></script>
	                        </#list>

                        */}

                                {(() => {
                                    /*
                                    const { options } = attribute.validators;

                                    if (options !== undefined) {
                                        return (
                                            <select
                                                id={attribute.name}
                                                name={attribute.name}
                                                onChange={event =>
                                                    formValidationDispatch({
                                                        "action": "update value",
                                                        "name": attribute.name,
                                                        "newValue": event.target.value
                                                    })
                                                }
                                                onBlur={() =>
                                                    formValidationDispatch({
                                                        "action": "focus lost",
                                                        "name": attribute.name
                                                    })
                                                }
                                                value={value}
                                            >
                                                <>
                                                    <option value="" selected disabled hidden>
                                                        {msg("selectAnOption")}
                                                    </option>
                                                    {options.options.map(option => (
                                                        <option key={option} value={option}>
                                                            {option}
                                                        </option>
                                                    ))}
                                                </>
                                            </select>
                                        );
                                    }

                                    return (
                                        <input
                                            type={(() => {
                                                switch (attribute.name) {
                                                    case "password-confirm":
                                                    case "password":
                                                        return "password";
                                                    default:
                                                        return "text";
                                                }
                                            })()}
                                            id={attribute.name}
                                            name={attribute.name}
                                            value={value}
                                            onChange={event =>
                                                formValidationDispatch({
                                                    "action": "update value",
                                                    "name": attribute.name,
                                                    "newValue": event.target.value
                                                })
                                            }
                                            onBlur={() =>
                                                formValidationDispatch({
                                                    "action": "focus lost",
                                                    "name": attribute.name
                                                })
                                            }
                                            className={getClassName("kcInputClass")}
                                            aria-invalid={displayableErrors.length !== 0}
                                            disabled={attribute.readOnly}
                                            autoComplete={attribute.autocomplete}
                                        />
                                    );
                                    */
                                })()}
                            </div>
                        </div>
                    </Fragment>
                );
            })}
        </>
    );
}

function AddRemoveButtonsMultiValuedAttribute(props: {
    formFieldStates: FormFieldState[];
    attribute: Attribute;
    index: number;
    dispatchFormAction: React.Dispatch<
        Extract<FormAction, { action: "add value to multi-valued attribute" | "remove value from multi-valued attribute" }>
    >;
    i18n: I18n;
}) {
    const { formFieldStates, attribute, index, dispatchFormAction, i18n } = props;

    const { msg } = i18n;

    const currentCount = formFieldStates.filter(({ attribute: attribute_i }) => attribute_i.name === attribute.name).length;

    const hasRemove = (() => {
        if (currentCount === 1) {
            return false;
        }

        const minCount = (() => {
            const { multivalued } = attribute.validators;

            if (multivalued === undefined) {
                return undefined;
            }

            const minStr = multivalued.min;

            if (minStr === undefined) {
                return undefined;
            }

            return parseInt(minStr);
        })();

        if (minCount === undefined) {
            return true;
        }

        if (currentCount === minCount) {
            return false;
        }

        return true;
    })();

    const hasAdd = (() => {
        if (index + 1 !== currentCount) {
            return false;
        }

        const maxCount = (() => {
            const { multivalued } = attribute.validators;

            if (multivalued === undefined) {
                return undefined;
            }

            const maxStr = multivalued.max;

            if (maxStr === undefined) {
                return undefined;
            }

            return parseInt(maxStr);
        })();

        if (maxCount === undefined) {
            return false;
        }

        if (currentCount === maxCount) {
            return false;
        }

        return true;
    })();

    return (
        <>
            {hasRemove && (
                <button
                    id={`kc-remove-${attribute.name}-${index + 1}`}
                    type="button"
                    className="pf-c-button pf-m-inline pf-m-link"
                    onClick={() =>
                        dispatchFormAction({
                            "action": "remove value from multi-valued attribute",
                            "name": attribute.name,
                            index
                        })
                    }
                >
                    {msg("remove")}
                    {hasRemove ? <>&nbsp;|&nbsp;</> : null}
                </button>
            )}
            {hasAdd && (
                <button
                    id="kc-add-titles-1"
                    type="button"
                    className="pf-c-button pf-m-inline pf-m-link"
                    onClick={() =>
                        dispatchFormAction({
                            "action": "add value to multi-valued attribute",
                            "name": attribute.name
                        })
                    }
                >
                    {msg("add value")}
                </button>
            )}
        </>
    );
}

function InputFiledByType(props: {
    attribute: Attribute;
    index: number;
    value: string;
    formValidationDispatch: React.Dispatch<FormAction>;
    getClassName: UserProfileFormFieldsProps["getClassName"];
    i18n: I18n;
}) {
    const { attribute, formValidationDispatch, getClassName, i18n } = props;

    /*
    <#macro inputFieldByType attribute>
	<#switch attribute.annotations.inputType!''>
	<#case 'textarea'>
		<@textareaTag attribute=attribute/>
		<#break>
	<#case 'select'>
	<#case 'multiselect'>
		<@selectTag attribute=attribute/>
		<#break>
	<#case 'select-radiobuttons'>
	<#case 'multiselect-checkboxes'>
		<@inputTagSelects attribute=attribute/>
		<#break>
	<#default>
		<#if attribute.multivalued && attribute.values?has_content>
			<#list attribute.values as value>
				<@inputTag attribute=attribute value=value!''/>
			</#list>
		<#else>
			<@inputTag attribute=attribute value=attribute.value!''/>
		</#if>
	</#switch>
    </#macro>
    */

    switch (attribute.annotations.inputType) {
        case "textarea":
            return <textareaTag {...props} />;
        case "select":
        case "multiselect":
            return <selectTag {...props} />;
        case "select-radiobuttons":
        case "multiselect-checkboxes":
            return <inputTagSelects {...props} />;
        default:
    }
}
