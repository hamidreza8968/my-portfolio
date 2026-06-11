import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    args: {
        label: "Click me",
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        variant: "primary",
    },
};

export const Secondary: Story = {
    args: {
        variant: "secondary",
    },
};

export const Ghost: Story = {
    args: {
        variant: "ghost",
    },
};

export const Text: Story = {
    args: {
        variant: "text",
    },
};

export const WithIcon: Story = {
    args: {
        variant: "primary",
        icon: <span>🚀</span>,
    },
};

export const Link: Story = {
    args: {
        as: "a",
        href: "https://example.com",
        variant: "primary",
    },
};