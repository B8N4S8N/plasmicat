// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vyozepJ6xip7aaU4b7VPCN
// Component: Srfy7qgtY9Cpyl
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: UBst1-0CrAf6xH/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_commerce_landing_page.module.css"; // plasmic-import: vyozepJ6xip7aaU4b7VPCN/projectcss
import sty from "./PlasmicCopyrightSocialLanguage.module.css"; // plasmic-import: Srfy7qgtY9Cpyl/css

import TwitterIcon from "./icons/PlasmicIcon__Twitter"; // plasmic-import: fObtMN6BV8u5yJ/icon
import MenuIcon from "./icons/PlasmicIcon__Menu"; // plasmic-import: 9R_rAz-20yK2Ml/icon
import YoutubeIcon from "./icons/PlasmicIcon__Youtube"; // plasmic-import: zD8ry4J4RHA6MB/icon
import PintrestIcon from "./icons/PlasmicIcon__Pintrest"; // plasmic-import: Voof3Z-uLmLAPy/icon
import Icon15Icon from "./icons/PlasmicIcon__Icon15"; // plasmic-import: jm-GOmD_wRCiwy/icon

export type PlasmicCopyrightSocialLanguage__VariantMembers = {};
export type PlasmicCopyrightSocialLanguage__VariantsArgs = {};
type VariantPropType = keyof PlasmicCopyrightSocialLanguage__VariantsArgs;
export const PlasmicCopyrightSocialLanguage__VariantProps =
  new Array<VariantPropType>();

export type PlasmicCopyrightSocialLanguage__ArgsType = {};
type ArgPropType = keyof PlasmicCopyrightSocialLanguage__ArgsType;
export const PlasmicCopyrightSocialLanguage__ArgProps =
  new Array<ArgPropType>();

export type PlasmicCopyrightSocialLanguage__OverridesType = {
  root?: p.Flex<"div">;
  text?: p.Flex<"div">;
};

export interface DefaultCopyrightSocialLanguageProps {
  className?: string;
}

function PlasmicCopyrightSocialLanguage__RenderFunc(props: {
  variants: PlasmicCopyrightSocialLanguage__VariantsArgs;
  args: PlasmicCopyrightSocialLanguage__ArgsType;
  overrides: PlasmicCopyrightSocialLanguage__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__mAmjz)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__viwl1)}
        >
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            {"© 2021 ShoeShop, Inc. All Rights Reserved."}
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__yjScS)}>
            <Button
              iconOnly={true}
              link={"http://twitter.com" as const}
              startIcon={
                <TwitterIcon
                  className={classNames(projectcss.all, sty.svg__zsrYb)}
                  role={"img"}
                />
              }
            />

            <Button
              className={classNames("__wab_instance", sty.button__ovBgq)}
              iconOnly={true}
              link={"http://youtube.com" as const}
              startIcon={
                <YoutubeIcon
                  className={classNames(projectcss.all, sty.svg__zyVxD)}
                  role={"img"}
                />
              }
            />

            <Button
              className={classNames("__wab_instance", sty.button__pmQe)}
              iconOnly={true}
              link={"http://pinterest.com" as const}
              startIcon={
                <PintrestIcon
                  className={classNames(projectcss.all, sty.svg__xgoMb)}
                  role={"img"}
                />
              }
            />
          </div>
        </p.Stack>

        <Button
          className={classNames("__wab_instance", sty.button__miyRv)}
          endIcon={
            <Icon15Icon
              className={classNames(projectcss.all, sty.svg__pCl14)}
              role={"img"}
            />
          }
          showEndIcon={true}
          startIcon={
            <Icon15Icon
              className={classNames(projectcss.all, sty.svg___0T2Zl)}
              role={"img"}
            />
          }
        >
          {"English"}
        </Button>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCopyrightSocialLanguage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCopyrightSocialLanguage__VariantsArgs;
    args?: PlasmicCopyrightSocialLanguage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCopyrightSocialLanguage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCopyrightSocialLanguage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicCopyrightSocialLanguage__ArgProps,
          internalVariantPropNames: PlasmicCopyrightSocialLanguage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicCopyrightSocialLanguage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCopyrightSocialLanguage";
  } else {
    func.displayName = `PlasmicCopyrightSocialLanguage.${nodeName}`;
  }
  return func;
}

export const PlasmicCopyrightSocialLanguage = Object.assign(
  // Top-level PlasmicCopyrightSocialLanguage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicCopyrightSocialLanguage
    internalVariantProps: PlasmicCopyrightSocialLanguage__VariantProps,
    internalArgProps: PlasmicCopyrightSocialLanguage__ArgProps
  }
);

export default PlasmicCopyrightSocialLanguage;
/* prettier-ignore-end */