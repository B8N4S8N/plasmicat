// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vyozepJ6xip7aaU4b7VPCN
// Component: ixdB81W5meDT3-
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
import TextInput from "../../TextInput"; // plasmic-import: oY7eb84I4tAdR1/component
import Button from "../../Button"; // plasmic-import: UBst1-0CrAf6xH/component
import CopyrightSocialLanguage from "../../CopyrightSocialLanguage"; // plasmic-import: Srfy7qgtY9Cpyl/component

import { useScreenVariants as useScreenVariantsoDu25JF0T439S } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: oDU25jF0t4_39S/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_commerce_landing_page.module.css"; // plasmic-import: vyozepJ6xip7aaU4b7VPCN/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: ixdB81W5meDT3-/css

import EmailIcon from "./icons/PlasmicIcon__Email"; // plasmic-import: CgtJOdD6gfsVt1/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: I3-66LbzmD6F_o/icon
import MenuIcon from "./icons/PlasmicIcon__Menu"; // plasmic-import: 9R_rAz-20yK2Ml/icon
import DeliveryIcon from "./icons/PlasmicIcon__Delivery"; // plasmic-import: f58KdFnSCt_zGv/icon
import EnterIcon from "./icons/PlasmicIcon__Enter"; // plasmic-import: 9GOsH6esTosUbg/icon
import QuestionIcon from "./icons/PlasmicIcon__Question"; // plasmic-import: IVOYRmO45OZNRj/icon

export type PlasmicFooter__VariantMembers = {};
export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  root?: p.Flex<"section">;
  textInput?: p.Flex<typeof TextInput>;
  copyrightSocialLanguage?: p.Flex<typeof CopyrightSocialLanguage>;
  textbox?: p.Flex<typeof TextInput>;
};

export interface DefaultFooterProps {
  className?: string;
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;

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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsoDu25JF0T439S()
  });

  return (
    <section
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
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
        className={classNames(projectcss.all, sty.freeBox___2Ipz2)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___4HGmM)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__y9FGs
            )}
          >
            {"Subscribe"}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__bEyUh
            )}
          >
            {
              "Sign up for exclusive offers, original stories, activism, events and more."
            }
          </div>

          <TextInput
            data-plasmic-name={"textInput"}
            data-plasmic-override={overrides.textInput}
            className={classNames("__wab_instance", sty.textInput)}
            placeholder={"Email address..." as const}
            showStartIcon={true}
            startIcon={
              <EmailIcon
                className={classNames(projectcss.all, sty.svg__kJqIn)}
                role={"img"}
              />
            }
          />

          <Button
            className={classNames("__wab_instance", sty.button__xXYo4)}
            colors={"black" as const}
          >
            {"Sign me up"}
          </Button>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___0K2Vv)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__sMaMv
            )}
          >
            {"Help"}
          </div>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__cma13)}
          >
            <Button
              showStartIcon={true}
              startIcon={
                <DeliveryIcon
                  className={classNames(projectcss.all, sty.svg__i9Opn)}
                  role={"img"}
                />
              }
            >
              {"Order status"}
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__iMgAi)}
              showStartIcon={true}
              startIcon={
                <EnterIcon
                  className={classNames(projectcss.all, sty.svg___74OTz)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__yfgrx
                )}
              >
                {"Returns and exchanges"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__cjiO3)}
              showStartIcon={true}
              startIcon={
                <QuestionIcon
                  className={classNames(projectcss.all, sty.svg___4PSr8)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__mlwrj
                )}
              >
                {"Help center"}
              </div>
            </Button>
          </p.Stack>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__th8D)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__esfrA
            )}
          >
            {"More info"}
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__jm6Wf)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___6GBjF)}
            >
              <Button>{"Gift cards"}</Button>

              <Button
                className={classNames("__wab_instance", sty.button__sccnT)}
              >
                {"Find a store"}
              </Button>

              <Button
                className={classNames("__wab_instance", sty.button__tReMj)}
              >
                {"Careers"}
              </Button>

              <Button
                className={classNames("__wab_instance", sty.button__nHfM)}
              >
                {"Sitemap"}
              </Button>
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__j5Y7R)}
            >
              <Button
                className={classNames("__wab_instance", sty.button__p0Bbu)}
              >
                {"Group sales"}
              </Button>

              <Button
                className={classNames("__wab_instance", sty.button__wKrct)}
              >
                {"Privacy policy"}
              </Button>

              <Button
                className={classNames("__wab_instance", sty.button__yzCe3)}
              >
                {"Contact us"}
              </Button>
            </p.Stack>
          </div>
        </p.Stack>
      </p.Stack>

      <CopyrightSocialLanguage
        data-plasmic-name={"copyrightSocialLanguage"}
        data-plasmic-override={overrides.copyrightSocialLanguage}
        className={classNames("__wab_instance", sty.copyrightSocialLanguage)}
      />
    </section>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "textInput", "textbox", "copyrightSocialLanguage"],
  textInput: ["textInput", "textbox"],
  copyrightSocialLanguage: ["copyrightSocialLanguage"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "section";
  textInput: typeof TextInput;
  copyrightSocialLanguage: typeof CopyrightSocialLanguage;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooter__ArgsType,
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
          internalArgPropNames: PlasmicFooter__ArgProps,
          internalVariantPropNames: PlasmicFooter__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textInput: makeNodeComponent("textInput"),
    copyrightSocialLanguage: makeNodeComponent("copyrightSocialLanguage"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */