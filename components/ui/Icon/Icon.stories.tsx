import type { Meta, StoryObj } from "@storybook/nextjs";
import Icon from "./Icon";

const meta: Meta<typeof Icon> = {
    title: "UI/Icon",
    component: Icon,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        name: {
            control: "select",
        },
        size: {
            control: "radio",
            options: ["sm", "md", "lg"],
        },
    },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
    args: {
        name: "arrow-right",
        size: "md",
    },
};

export const Small: Story = {
    args: {
        name: "arrow-right",
        size: "sm",
    },
};

export const Large: Story = {
    args: {
        name: "arrow-right",
        size: "lg",
    },
};

export const Download: Story = {
    args: {
        name: "download",
        size: "md",
    },
};