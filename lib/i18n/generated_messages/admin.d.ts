export declare const messages: {
    readonly ca: {
        readonly invalidPasswordHistoryMessage: "Contrasenya incorrecta: no pot ser igual a cap de les últimes {0} contrasenyes.";
        readonly invalidPasswordMinDigitsMessage: "Contraseña incorrecta: debe contener al menos {0} caracteres numéricos.";
        readonly invalidPasswordMinLengthMessage: "Contrasenya incorrecta: longitud mínima {0}.";
        readonly invalidPasswordMinLowerCaseCharsMessage: "Contrasenya incorrecta: ha de contenir almenys {0} lletres minúscules.";
        readonly invalidPasswordMinSpecialCharsMessage: "Contrasenya incorrecta: ha de contenir almenys {0} caràcters especials.";
        readonly invalidPasswordMinUpperCaseCharsMessage: "Contrasenya incorrecta: ha de contenir almenys {0} lletres majúscules.";
        readonly invalidPasswordNotUsernameMessage: "Contrasenya incorrecta: no pot ser igual al nom d''usuari.";
        readonly invalidPasswordRegexPatternMessage: "Contrasenya incorrecta: no compleix l''expressió regular.";
    };
    readonly de: {
        readonly invalidPasswordMinLengthMessage: "Ungültiges Passwort: muss mindestens {0} Zeichen beinhalten.";
        readonly invalidPasswordMinLowerCaseCharsMessage: "Ungültiges Passwort: muss mindestens {0} Kleinbuchstaben beinhalten.";
        readonly invalidPasswordMinDigitsMessage: "Ungültiges Passwort: muss mindestens {0} Ziffern beinhalten.";
        readonly invalidPasswordMinUpperCaseCharsMessage: "Ungültiges Passwort: muss mindestens {0} Großbuchstaben beinhalten.";
        readonly invalidPasswordMinSpecialCharsMessage: "Ungültiges Passwort: muss mindestens {0} Sonderzeichen beinhalten.";
        readonly invalidPasswordNotUsernameMessage: "Ungültiges Passwort: darf nicht identisch mit dem Benutzernamen sein.";
        readonly invalidPasswordRegexPatternMessage: "Ungültiges Passwort: stimmt nicht mit Regex-Muster überein.";
        readonly invalidPasswordHistoryMessage: "Ungültiges Passwort: darf nicht identisch mit einem der letzten {0} Passwörter sein.";
        readonly invalidPasswordBlacklistedMessage: "Ungültiges Passwort: Passwort ist zu bekannt und auf der schwarzen Liste.";
        readonly invalidPasswordGenericMessage: "Ungültiges Passwort: neues Passwort erfüllt die Passwort-Anforderungen nicht.";
    };
    readonly en: {
        readonly invalidPasswordMinLengthMessage: "Invalid password: minimum length {0}.";
        readonly invalidPasswordMinLowerCaseCharsMessage: "Invalid password: must contain at least {0} lower case characters.";
        readonly invalidPasswordMinDigitsMessage: "Invalid password: must contain at least {0} numerical digits.";
        readonly invalidPasswordMinUpperCaseCharsMessage: "Invalid password: must contain at least {0} upper case characters.";
        readonly invalidPasswordMinSpecialCharsMessage: "Invalid password: must contain at least {0} special characters.";
        readonly invalidPasswordNotUsernameMessage: "Invalid password: must not be equal to the username.";
        readonly invalidPasswordRegexPatternMessage: "Invalid password: fails to match regex pattern(s).";
        readonly invalidPasswordHistoryMessage: "Invalid password: must not be equal to any of last {0} passwords.";
        readonly invalidPasswordBlacklistedMessage: "Invalid password: password is blacklisted.";
        readonly invalidPasswordGenericMessage: "Invalid password: new password does not match password policies.";
        readonly ldapErrorInvalidCustomFilter: "Custom configured LDAP filter does not start with \"(\" or does not end with \")\".";
        readonly ldapErrorConnectionTimeoutNotNumber: "Connection Timeout must be a number";
        readonly ldapErrorReadTimeoutNotNumber: "Read Timeout must be a number";
        readonly ldapErrorMissingClientId: "Client ID needs to be provided in config when Realm Roles Mapping is not used.";
        readonly ldapErrorCantPreserveGroupInheritanceWithUIDMembershipType: "Not possible to preserve group inheritance and use UID membership type together.";
        readonly ldapErrorCantWriteOnlyForReadOnlyLdap: "Can not set write only when LDAP provider mode is not WRITABLE";
        readonly ldapErrorCantWriteOnlyAndReadOnly: "Can not set write-only and read-only together";
        readonly ldapErrorCantEnableStartTlsAndConnectionPooling: "Can not enable both StartTLS and connection pooling.";
        readonly ldapErrorCantEnableUnsyncedAndImportOff: "Can not disable Importing users when LDAP provider mode is UNSYNCED";
        readonly ldapErrorMissingGroupsPathGroup: "Groups path group does not exist - please create the group on specified path first";
        readonly clientRedirectURIsFragmentError: "Redirect URIs must not contain an URI fragment";
        readonly clientRootURLFragmentError: "Root URL must not contain an URL fragment";
        readonly clientRootURLIllegalSchemeError: "Root URL uses an illegal scheme";
        readonly clientBaseURLIllegalSchemeError: "Base URL uses an illegal scheme";
        readonly clientRedirectURIsIllegalSchemeError: "A redirect URI uses an illegal scheme";
        readonly clientBaseURLInvalid: "Base URL is not a valid URL";
        readonly clientRootURLInvalid: "Root URL is not a valid URL";
        readonly clientRedirectURIsInvalid: "A redirect URI is not a valid URI";
        readonly pairwiseMalformedClientRedirectURI: "Client contained an invalid redirect URI.";
        readonly pairwiseClientRedirectURIsMissingHost: "Client redirect URIs must contain a valid host component.";
        readonly pairwiseClientRedirectURIsMultipleHosts: "Without a configured Sector Identifier URI, client redirect URIs must not contain multiple host components.";
        readonly pairwiseMalformedSectorIdentifierURI: "Malformed Sector Identifier URI.";
        readonly pairwiseFailedToGetRedirectURIs: "Failed to get redirect URIs from the Sector Identifier URI.";
        readonly pairwiseRedirectURIsMismatch: "Client redirect URIs does not match redirect URIs fetched from the Sector Identifier URI.";
    };
    readonly es: {
        readonly invalidPasswordMinLengthMessage: "Contraseña incorrecta: longitud mínima {0}.";
        readonly invalidPasswordMinLowerCaseCharsMessage: "Contraseña incorrecta: debe contener al menos {0} letras minúsculas.";
        readonly invalidPasswordMinDigitsMessage: "Contraseña incorrecta: debe contener al menos {0} caracteres numéricos.";
        readonly invalidPasswordMinUpperCaseCharsMessage: "Contraseña incorrecta: debe contener al menos {0} letras mayúsculas.";
        readonly invalidPasswordMinSpecialCharsMessage: "Contraseña incorrecta: debe contener al menos {0} caracteres especiales.";
        readonly invalidPasswordNotUsernameMessage: "Contraseña incorrecta: no puede ser igual al nombre de usuario.";
        readonly invalidPasswordRegexPatternMessage: "Contraseña incorrecta: no cumple la expresión regular.";
        readonly invalidPasswordHistoryMessage: "Contraseña incorrecta: no puede ser igual a ninguna de las últimas {0} contraseñas.";
    };
    readonly fr: {
        readonly invalidPasswordMinLengthMessage: "Mot de passe invalide : longueur minimale requise de {0}.";
        readonly invalidPasswordMinLowerCaseCharsMessage: "Mot de passe invalide : doit contenir au moins {0} lettre(s) en minuscule.";
        readonly invalidPasswordMinDigitsMessage: "Mot de passe invalide : doit contenir au moins {0} chiffre(s).";
        readonly invalidPasswordMinUpperCaseCharsMessage: "Mot de passe invalide : doit contenir au moins {0} lettre(s) en majuscule.";
        readonly invalidPasswordMinSpecialCharsMessage: "Mot de passe invalide : doit contenir au moins {0} caractère(s) spéciaux.";
        readonly invalidPasswordNotUsernameMessage: "Mot de passe invalide : ne doit pas être identique au nom d''utilisateur.";
        readonly invalidPasswordRegexPatternMessage: "Mot de passe invalide : ne valide pas l''expression rationnelle.";
        readonly invalidPasswordHistoryMessage: "Mot de passe invalide : ne doit pas être égal aux {0} derniers mot de passe.";
    };
    readonly it: {};
    readonly ja: {
        readonly invalidPasswordMinLengthMessage: "無効なパスワード: 最小{0}の長さが必要です。";
        readonly invalidPasswordMinLowerCaseCharsMessage: "無効なパスワード: 少なくとも{0}文字の小文字を含む必要があります。";
        readonly invalidPasswordMinDigitsMessage: "無効なパスワード: 少なくとも{0}文字の数字を含む必要があります。";
        readonly invalidPasswordMinUpperCaseCharsMessage: "無効なパスワード: 少なくとも{0}文字の大文字を含む必要があります。";
        readonly invalidPasswordMinSpecialCharsMessage: "無効なパスワード: 少なくとも{0}文字の特殊文字を含む必要があります。";
        readonly invalidPasswordNotUsernameMessage: "無効なパスワード: ユーザー名と同じパスワードは禁止されています。";
        readonly invalidPasswordRegexPatternMessage: "無効なパスワード: 正規表現パターンと一致しません。";
        readonly invalidPasswordHistoryMessage: "無効なパスワード: 最近の{0}パスワードのいずれかと同じパスワードは禁止されています。";
        readonly invalidPasswordBlacklistedMessage: "無効なパスワード: パスワードがブラックリストに含まれています。";
        readonly invalidPasswordGenericMessage: "無効なパスワード: 新しいパスワードはパスワード・ポリシーと一致しません。";
        readonly ldapErrorInvalidCustomFilter: "LDAPフィルターのカスタム設定が、「(」から開始または「)」で終了となっていません。";
        readonly ldapErrorConnectionTimeoutNotNumber: "接続タイムアウトは数字でなければなりません";
        readonly ldapErrorReadTimeoutNotNumber: "読み取りタイムアウトは数字でなければなりません";
        readonly ldapErrorMissingClientId: "レルムロール・マッピングを使用しない場合は、クライアントIDは設定内で提供される必要があります。";
        readonly ldapErrorCantPreserveGroupInheritanceWithUIDMembershipType: "グループの継承を維持することと、UIDメンバーシップ・タイプを使用することは同時にできません。";
        readonly ldapErrorCantWriteOnlyForReadOnlyLdap: "LDAPプロバイダー・モードがWRITABLEではない場合は、write onlyを設定することはできません。";
        readonly ldapErrorCantWriteOnlyAndReadOnly: "write-onlyとread-onlyを一緒に設定することはできません。";
        readonly ldapErrorCantEnableStartTlsAndConnectionPooling: "StartTLSと接続プーリングの両方を有効にできません。";
        readonly clientRedirectURIsFragmentError: "リダイレクトURIにURIフラグメントを含めることはできません。";
        readonly clientRootURLFragmentError: "ルートURLにURLフラグメントを含めることはできません。";
        readonly pairwiseMalformedClientRedirectURI: "クライアントに無効なリダイレクトURIが含まれていました。";
        readonly pairwiseClientRedirectURIsMissingHost: "クライアントのリダイレクトURIには有効なホスト・コンポーネントが含まれている必要があります。";
        readonly pairwiseClientRedirectURIsMultipleHosts: "設定されたセレクター識別子URIがない場合は、クライアントのリダイレクトURIは複数のホスト・コンポーネントを含むことはできません。";
        readonly pairwiseMalformedSectorIdentifierURI: "不正なセレクター識別子URIです。";
        readonly pairwiseFailedToGetRedirectURIs: "セクター識別子URIからリダイレクトURIを取得できませんでした。";
        readonly pairwiseRedirectURIsMismatch: "クライアントのリダイレクトURIは、セクター識別子URIからフェッチされたリダイレクトURIと一致しません。";
    };
    readonly lt: {
        readonly invalidPasswordMinLengthMessage: "Per trumpas slaptažodis: mažiausias ilgis {0}.";
        readonly invalidPasswordMinLowerCaseCharsMessage: "Neteisingas slaptažodis: privaloma įvesti {0} mažąją raidę.";
        readonly invalidPasswordMinDigitsMessage: "Neteisingas slaptažodis: privaloma įvesti {0} skaitmenį.";
        readonly invalidPasswordMinUpperCaseCharsMessage: "Neteisingas slaptažodis: privaloma įvesti {0} didžiąją raidę.";
        readonly invalidPasswordMinSpecialCharsMessage: "Neteisingas slaptažodis: privaloma įvesti {0} specialų simbolį.";
        readonly invalidPasswordNotUsernameMessage: "Neteisingas slaptažodis: slaptažodis negali sutapti su naudotojo vardu.";
        readonly invalidPasswordRegexPatternMessage: "Neteisingas slaptažodis: slaptažodis netenkina regex taisyklės(ių).";
        readonly invalidPasswordHistoryMessage: "Neteisingas slaptažodis: slaptažodis negali sutapti su prieš tai buvusiais {0} slaptažodžiais.";
        readonly ldapErrorInvalidCustomFilter: "Sukonfigūruotas LDAP filtras neprasideda \"(\" ir nesibaigia \")\" simboliais.";
        readonly ldapErrorMissingClientId: "Privaloma nurodyti kliento ID kai srities rolių susiejimas nėra nenaudojamas.";
        readonly ldapErrorCantPreserveGroupInheritanceWithUIDMembershipType: "Grupių paveldėjimo ir UID narystės tipas kartu negali būti naudojami.";
        readonly ldapErrorCantWriteOnlyForReadOnlyLdap: "Negalima nustatyti rašymo rėžimo kuomet LDAP teikėjo rėžimas ne WRITABLE";
        readonly ldapErrorCantWriteOnlyAndReadOnly: "Negalima nustatyti tik rašyti ir tik skaityti kartu";
        readonly clientRedirectURIsFragmentError: "Nurodykite URI fragmentą, kurio negali būti peradresuojamuose URI adresuose";
        readonly clientRootURLFragmentError: "Nurodykite URL fragmentą, kurio negali būti šakniniame URL adrese";
        readonly pairwiseMalformedClientRedirectURI: "Klientas pateikė neteisingą nukreipimo nuorodą.";
        readonly pairwiseClientRedirectURIsMissingHost: "Kliento nukreipimo nuorodos privalo būti nurodytos su serverio vardo komponentu.";
        readonly pairwiseClientRedirectURIsMultipleHosts: "Kuomet nesukonfigūruotas sektoriaus identifikatoriaus URL, kliento nukreipimo nuorodos privalo talpinti ne daugiau kaip vieną skirtingą serverio vardo komponentą.";
        readonly pairwiseMalformedSectorIdentifierURI: "Neteisinga sektoriaus identifikatoriaus URI.";
        readonly pairwiseFailedToGetRedirectURIs: "Nepavyko gauti nukreipimo nuorodų iš sektoriaus identifikatoriaus URI.";
        readonly pairwiseRedirectURIsMismatch: "Kliento nukreipimo nuoroda neatitinka nukreipimo nuorodų iš sektoriaus identifikatoriaus URI.";
    };
    readonly nl: {
        readonly invalidPasswordMinLengthMessage: "Ongeldig wachtwoord: de minimale lengte is {0} karakters.";
        readonly invalidPasswordMinLowerCaseCharsMessage: "Ongeldig wachtwoord: het moet minstens {0} kleine letters bevatten.";
        readonly invalidPasswordMinDigitsMessage: "Ongeldig wachtwoord: het moet minstens {0} getallen bevatten.";
        readonly invalidPasswordMinUpperCaseCharsMessage: "Ongeldig wachtwoord: het moet minstens {0} hoofdletters bevatten.";
        readonly invalidPasswordMinSpecialCharsMessage: "Ongeldig wachtwoord: het moet minstens {0} speciale karakters bevatten.";
        readonly invalidPasswordNotUsernameMessage: "Ongeldig wachtwoord: het mag niet overeenkomen met de gebruikersnaam.";
        readonly invalidPasswordRegexPatternMessage: "Ongeldig wachtwoord: het voldoet niet aan het door de beheerder ingestelde patroon.";
        readonly invalidPasswordHistoryMessage: "Ongeldig wachtwoord: het mag niet overeen komen met een van de laatste {0} wachtwoorden.";
        readonly invalidPasswordGenericMessage: "Ongeldig wachtwoord: het nieuwe wachtwoord voldoet niet aan het wachtwoordbeleid.";
        readonly ldapErrorInvalidCustomFilter: "LDAP filter met aangepaste configuratie start niet met \"(\" of eindigt niet met \")\".";
        readonly ldapErrorConnectionTimeoutNotNumber: "Verbindingstimeout moet een getal zijn";
        readonly ldapErrorReadTimeoutNotNumber: "Lees-timeout moet een getal zijn";
        readonly ldapErrorMissingClientId: "Client ID moet ingesteld zijn als Realm Roles Mapping niet gebruikt wordt.";
        readonly ldapErrorCantPreserveGroupInheritanceWithUIDMembershipType: "Kan groepsovererving niet behouden bij UID-lidmaatschapstype.";
        readonly ldapErrorCantWriteOnlyForReadOnlyLdap: "Alleen-schrijven niet mogelijk als LDAP provider mode niet WRITABLE is";
        readonly ldapErrorCantWriteOnlyAndReadOnly: "Alleen-schrijven en alleen-lezen mogen niet tegelijk ingesteld zijn";
        readonly clientRedirectURIsFragmentError: "Redirect URIs mogen geen URI fragment bevatten";
        readonly clientRootURLFragmentError: "Root URL mag geen URL fragment bevatten";
        readonly pairwiseMalformedClientRedirectURI: "Client heeft een ongeldige redirect URI.";
        readonly pairwiseClientRedirectURIsMissingHost: "Client redirect URIs moeten een geldige host-component bevatten.";
        readonly pairwiseClientRedirectURIsMultipleHosts: "Zonder een geconfigureerde Sector Identifier URI mogen client redirect URIs niet meerdere host componenten hebben.";
        readonly pairwiseMalformedSectorIdentifierURI: "Onjuist notatie in Sector Identifier URI.";
        readonly pairwiseFailedToGetRedirectURIs: "Kon geen redirect URIs verkrijgen van de Sector Identifier URI.";
        readonly pairwiseRedirectURIsMismatch: "Client redirect URIs komen niet overeen met redict URIs ontvangen van de Sector Identifier URI.";
    };
    readonly no: {
        readonly invalidPasswordMinLengthMessage: "Ugyldig passord: minimum lengde {0}.";
        readonly invalidPasswordMinLowerCaseCharsMessage: "Ugyldig passord: må inneholde minst {0} små bokstaver.";
        readonly invalidPasswordMinDigitsMessage: "Ugyldig passord: må inneholde minst {0} sifre.";
        readonly invalidPasswordMinUpperCaseCharsMessage: "Ugyldig passord: må inneholde minst {0} store bokstaver.";
        readonly invalidPasswordMinSpecialCharsMessage: "Ugyldig passord: må inneholde minst {0} spesialtegn.";
        readonly invalidPasswordNotUsernameMessage: "Ugyldig passord: kan ikke være likt brukernavn.";
        readonly invalidPasswordRegexPatternMessage: "Ugyldig passord: tilfredsstiller ikke kravene for passord-mønster.";
        readonly invalidPasswordHistoryMessage: "Ugyldig passord: kan ikke være likt noen av de {0} foregående passordene.";
        readonly ldapErrorInvalidCustomFilter: "Tilpasset konfigurasjon av LDAP-filter starter ikke med \"(\" eller slutter ikke med \")\".";
        readonly ldapErrorMissingClientId: "KlientID må være tilgjengelig i config når sikkerhetsdomenerollemapping ikke brukes.";
        readonly ldapErrorCantPreserveGroupInheritanceWithUIDMembershipType: "Ikke mulig å bevare gruppearv og samtidig bruke UID medlemskapstype.";
        readonly ldapErrorCantWriteOnlyForReadOnlyLdap: "Kan ikke sette write-only når LDAP leverandør-modus ikke er WRITABLE";
        readonly ldapErrorCantWriteOnlyAndReadOnly: "Kan ikke sette både write-only og read-only";
    };
    readonly pl: {};
    readonly "pt-BR": {
        readonly invalidPasswordMinLengthMessage: "Senha inválida: deve conter ao menos {0} caracteres.";
        readonly invalidPasswordMinLowerCaseCharsMessage: "Senha inválida: deve conter ao menos {0} caracteres minúsculos.";
        readonly invalidPasswordMinDigitsMessage: "Senha inválida: deve conter ao menos {0} digitos numéricos.";
        readonly invalidPasswordMinUpperCaseCharsMessage: "Senha inválida: deve conter ao menos {0} caracteres maiúsculos.";
        readonly invalidPasswordMinSpecialCharsMessage: "Senha inválida: deve conter ao menos {0} caracteres especiais.";
        readonly invalidPasswordNotUsernameMessage: "Senha inválida: não deve ser igual ao nome de usuário.";
        readonly invalidPasswordRegexPatternMessage: "Senha inválida: falha ao passar por padrões.";
        readonly invalidPasswordHistoryMessage: "Senha inválida: não deve ser igual às últimas {0} senhas.";
        readonly ldapErrorInvalidCustomFilter: "Filtro LDAP não inicia com \"(\" ou não termina com \")\".";
        readonly ldapErrorMissingClientId: "ID do cliente precisa ser definido na configuração quando mapeamentos de Roles do Realm não é utilizado.";
        readonly ldapErrorCantPreserveGroupInheritanceWithUIDMembershipType: "Não é possível preservar herança de grupos e usar tipo de associação de UID ao mesmo tempo.";
        readonly ldapErrorCantWriteOnlyForReadOnlyLdap: "Não é possível definir modo de somente escrita quando o provedor LDAP não suporta escrita";
        readonly ldapErrorCantWriteOnlyAndReadOnly: "Não é possível definir somente escrita e somente leitura ao mesmo tempo";
        readonly clientRedirectURIsFragmentError: "URIs de redirecionamento não podem conter fragmentos";
        readonly clientRootURLFragmentError: "URL raiz não pode conter fragmentos";
    };
    readonly ru: {
        readonly invalidPasswordMinLengthMessage: "Некорректный пароль: длина пароля должна быть не менее {0} символов(а).";
        readonly invalidPasswordMinDigitsMessage: "Некорректный пароль: должен содержать не менее {0} цифр(ы).";
        readonly invalidPasswordMinLowerCaseCharsMessage: "Некорректный пароль: пароль должен содержать не менее {0} символов(а) в нижнем регистре.";
        readonly invalidPasswordMinUpperCaseCharsMessage: "Некорректный пароль: пароль должен содержать не менее {0} символов(а) в верхнем регистре.";
        readonly invalidPasswordMinSpecialCharsMessage: "Некорректный пароль: пароль должен содержать не менее {0} спецсимволов(а).";
        readonly invalidPasswordNotUsernameMessage: "Некорректный пароль: пароль не должен совпадать с именем пользователя.";
        readonly invalidPasswordRegexPatternMessage: "Некорректный пароль: пароль не прошел проверку по регулярному выражению.";
        readonly invalidPasswordHistoryMessage: "Некорректный пароль: пароль не должен совпадать с последним(и) {0} паролем(ями).";
        readonly invalidPasswordGenericMessage: "Некорректный пароль: новый пароль не соответствует правилам пароля.";
        readonly ldapErrorInvalidCustomFilter: "Сконфигурированный пользователем фильтр LDAP не должен начинаться с \"(\" или заканчиваться на \")\".";
        readonly ldapErrorMissingClientId: "Client ID должен быть настроен в конфигурации, если не используется сопоставление ролей в realm.";
        readonly ldapErrorCantPreserveGroupInheritanceWithUIDMembershipType: "Не удалось унаследовать группу и использовать членство UID типа вместе.";
        readonly ldapErrorCantWriteOnlyForReadOnlyLdap: "Невозможно установить режим \"только на запись\", когда LDAP провайдер не в режиме WRITABLE";
        readonly ldapErrorCantWriteOnlyAndReadOnly: "Невозможно одновременно установить режимы \"только на чтение\" и \"только на запись\"";
        readonly clientRedirectURIsFragmentError: "URI перенаправления не должен содержать фрагмент URI";
        readonly clientRootURLFragmentError: "Корневой URL не должен содержать фрагмент URL ";
        readonly pairwiseMalformedClientRedirectURI: "Клиент содержит некорректный URI перенаправления.";
        readonly pairwiseClientRedirectURIsMissingHost: "URI перенаправления клиента должен содержать корректный компонент хоста.";
        readonly pairwiseClientRedirectURIsMultipleHosts: "Без конфигурации по части идентификатора URI, URI перенаправления клиента не может содержать несколько компонентов хоста.";
        readonly pairwiseMalformedSectorIdentifierURI: "Искаженная часть идентификатора URI.";
        readonly pairwiseFailedToGetRedirectURIs: "Не удалось получить идентификаторы URI перенаправления из части идентификатора URI.";
        readonly pairwiseRedirectURIsMismatch: "Клиент URI переадресации не соответствует URI переадресации, полученной из части идентификатора URI.";
    };
    readonly "zh-CN": {
        readonly invalidPasswordMinLengthMessage: "无效的密码：最短长度 {0}.";
        readonly invalidPasswordMinLowerCaseCharsMessage: "无效的密码：至少包含 {0} 小写字母";
        readonly invalidPasswordMinDigitsMessage: "无效的密码：至少包含 {0} 个数字";
        readonly invalidPasswordMinUpperCaseCharsMessage: "无效的密码：最短长度 {0} 大写字母";
        readonly invalidPasswordMinSpecialCharsMessage: "无效的密码：最短长度 {0} 特殊字符";
        readonly invalidPasswordNotUsernameMessage: "无效的密码： 不可以与用户名相同";
        readonly invalidPasswordRegexPatternMessage: "无效的密码： 无法与正则表达式匹配";
        readonly invalidPasswordHistoryMessage: "无效的密码：不能与最后使用的 {0} 个密码相同";
        readonly ldapErrorInvalidCustomFilter: "定制的 LDAP过滤器不是以 \"(\" 开头或以 \")\"结尾.";
        readonly ldapErrorConnectionTimeoutNotNumber: "Connection Timeout 必须是个数字";
        readonly ldapErrorMissingClientId: "当域角色映射未启用时，客户端 ID 需要指定。";
        readonly ldapErrorCantPreserveGroupInheritanceWithUIDMembershipType: "无法在使用UID成员类型的同时维护组继承属性。";
        readonly ldapErrorCantWriteOnlyForReadOnlyLdap: "当LDAP提供方不是可写模式时，无法设置只写";
        readonly ldapErrorCantWriteOnlyAndReadOnly: "无法同时设置只读和只写";
        readonly clientRedirectURIsFragmentError: "重定向URL不应包含URI片段";
        readonly clientRootURLFragmentError: "根URL 不应包含 URL 片段";
        readonly pairwiseMalformedClientRedirectURI: "客户端包含一个无效的重定向URL";
        readonly pairwiseClientRedirectURIsMissingHost: "客户端重定向URL需要有一个有效的主机";
        readonly pairwiseClientRedirectURIsMultipleHosts: "Without a configured Sector Identifier URI, client redirect URIs must not contain multiple host components.";
        readonly pairwiseMalformedSectorIdentifierURI: "Malformed Sector Identifier URI.";
        readonly pairwiseFailedToGetRedirectURIs: "无法从服务器获得重定向URL";
        readonly pairwiseRedirectURIsMismatch: "客户端的重定向URI与服务器端获取的URI配置不匹配。";
    };
};
