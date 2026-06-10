import {InlineListProps} from "@/components/layout/Hero/InlineList/InlineList.types";
import React from "react";

export default function InlineList({
                               items,
                               separator = " • ",
                           }: InlineListProps) {
    return (
        <ul>
            {items.map((item, index) => (
                <li className="small inline" key={index}>
                    {index > 0 && separator}
                    {item}
                </li>
            ))}
        </ul>
    );
}