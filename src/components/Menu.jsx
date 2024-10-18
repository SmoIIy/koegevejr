import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
    HamburgerMenuIcon,
    DotFilledIcon,
    CheckIcon,
    ChevronRightIcon,
} from "@radix-ui/react-icons";
import "../index.css";

//https://www.radix-ui.com/primitives/docs/components/dropdown-menu

const DropdownMenuDemo = () => {
    const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
    const [urlsChecked, setUrlsChecked] = React.useState(false);
    const [person, setPerson] = React.useState("pedro");

    return (
        <DropdownMenu.Root className="menu">
            <DropdownMenu.Trigger asChild>
                <button
                    className="IconButton menu"
                    aria-label="Customise options"
                >
                    {/* <HamburgerMenuIcon /> */}
                    Menu
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    className="DropdownMenuContent"
                    sideOffset={5}
                    align="right"
                >
                    <DropdownMenu.Item className="DropdownMenuItem">
                        Yderligere info
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="DropdownMenuItem">
                        Om
                    </DropdownMenu.Item>
                    <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
                            More Tools
                            <div className="RightSlot">
                                <ChevronRightIcon />
                            </div>
                        </DropdownMenu.SubTrigger>
                        <DropdownMenu.Portal>
                            <DropdownMenu.SubContent
                                className="DropdownMenuSubContent"
                                sideOffset={2}
                                alignOffset={-5}
                            >
                                <DropdownMenu.Item className="DropdownMenuItem">
                                    Save Page As…{" "}
                                    <div className="RightSlot">⌘+S</div>
                                </DropdownMenu.Item>
                                <DropdownMenu.Item className="DropdownMenuItem">
                                    Create Shortcut…
                                </DropdownMenu.Item>
                                <DropdownMenu.Item className="DropdownMenuItem">
                                    Name Window…
                                </DropdownMenu.Item>
                                <DropdownMenu.Separator className="DropdownMenu.Separator" />
                                <DropdownMenu.Item className="DropdownMenuItem">
                                    Developer Tools
                                </DropdownMenu.Item>
                            </DropdownMenu.SubContent>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Sub>

                    <DropdownMenu.Separator className="DropdownMenuSeparator" />

                    <DropdownMenu.Arrow className="DropdownMenuArrow" />
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default DropdownMenuDemo;
