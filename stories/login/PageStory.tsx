import React from "react";
import type { KcContext } from "./KcContext";
import KcApp from "./KcApp";
import type { DeepPartial } from "../../dist/tools/DeepPartial";
import { createGetKcContextMock } from "../../dist/login/KcContext";
import type { KcContextExtraProperties, KcContextExtraPropertiesPerPage } from "./KcContext";

const kcContextExtraProperties: KcContextExtraProperties = {};
const kcContextExtraPropertiesPerPage: KcContextExtraPropertiesPerPage = {};

const { getKcContextMock } = createGetKcContextMock({
    kcContextExtraProperties,
    kcContextExtraPropertiesPerPage
});

export function createPageStory<PageId extends KcContext["pageId"]>(params: { pageId: PageId }) {
    const { pageId } = params;

    function PageStory(props: { kcContext?: DeepPartial<Extract<KcContext, { pageId: PageId }>> }) {
        const { kcContext: overrides } = props;

        const kcContextMock = getKcContextMock({
            pageId,
            overrides
        });

        return (
            <React.StrictMode>
                <KcApp kcContext={kcContextMock} />
            </React.StrictMode>
        );
    }

    return { PageStory };
}