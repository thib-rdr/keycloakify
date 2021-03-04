<script>const _= 
{
    "url": {
        "loginAction": "${url.loginAction}",
        "resourcesPath": "${url.resourcesPath}",
        "resourcesCommonPath": "${url.resourcesCommonPath}",
        "loginRestartFlowUrl": "${url.loginRestartFlowUrl}",
        "loginResetCredentialsUrl": "${url.loginResetCredentialsUrl}",
        "registrationUrl": "${url.registrationUrl}"
    },
    "realm": {
        "displayName": "${realm.displayName!''}" || undefined,
        "displayNameHtml": "${realm.displayNameHtml!''}" || undefined,
        "internationalizationEnabled": ${realm.internationalizationEnabled?c},
        "password": ${realm.password?c},
        "loginWithEmailAllowed": ${realm.loginWithEmailAllowed?c},
        "registrationEmailAsUsername": ${realm.registrationEmailAsUsername?c},
        "rememberMe": ${realm.rememberMe?c},
        "resetPasswordAllowed": ${realm.resetPasswordAllowed?c} 
    },
    "locale": (function (){

        <#if realm.internationalizationEnabled>

            return {
                "supported": (function(){

                    <#if realm.internationalizationEnabled>

                        var out= [];

                        <#list locale.supported as lng>
                            out.push({ 
                                "url": "${lng.url}", 
                                "label": "${lng.label}",
                                "languageTag": "${lng.languageTag}"
                            });
                        </#list>

                        return out;

                    </#if>

                    return undefined;

                })(),
                "current": "${locale.current}"
            };

        </#if>

        return undefined;

    })(),
    "auth": (function (){


        <#if auth?has_content>

            var out= {
                "showUsername": ${auth.showUsername()?c},
                "showResetCredentials": ${auth.showResetCredentials()?c},
                "showTryAnotherWayLink": ${auth.showTryAnotherWayLink()?c},
                "selectedCredential": "${auth.selectedCredential!''}" || undefined
            };

            <#if auth.showUsername() && !auth.showResetCredentials()>
                Object.assign(
                    out,
                    {
                        "attemptedUsername": "${auth.attemptedUsername}"
                    }
                );
            </#if>

            return out;

        </#if>


        return undefined;

    })(),
    "scripts": (function(){

        var out = [];

        <#if scripts??>
            <#list scripts as script>
                out.push("${script}");
            </#list>
        </#if>

        return out;

    })(),
    "message": (function (){

        <#if message?has_content>

            return { 
                "type": "${message.type}",
                "summary": "${kcSanitize(message.summary)?no_esc}"
            };

        </#if>

        return undefined;

    })(),
    "isAppInitiatedAction": (function (){

        <#if isAppInitiatedAction??>
            return true;
        </#if>
        return false;

    })(),
    "social": {
        "displayInfo": ${social.displayInfo?c},
        "providers": (()=>{

            <#if social.providers??>

                var out= [];

                <#list social.providers as p>
                    out.push({ 
                        "loginUrl": "${p.loginUrl}",
                        "alias": "${p.alias}",
                        "providerId": "${p.providerId}",
                        "displayName": "${p.displayName}"
                    });
                </#list>

                return out;

            </#if>

            return undefined;

        })()
    },
    "usernameEditDisabled": (function () {

        <#if usernameEditDisabled??>
            return true;
        </#if>
        return false;

    })(),
    "login": {
        "username": "${login.username!''}" || undefined,
        "rememberMe": (function (){

            <#if login.rememberMe??>
                return true;
            </#if>
            return false;


        })()
    },
    "registrationDisabled": (function (){

        <#if registrationDisabled??>
            return true;
        </#if>
        return false;

    })
}
</script>