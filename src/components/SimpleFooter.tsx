import { LuHeart } from "react-icons/lu";

const SimpleFooter = () => {
    return (
        <footer className="bg-card border-t border-border/30">
            <div className="container mx-auto px-6 py-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                        © 2025 Hemant Sharma. All rights reserved.
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <span>Made with</span>
                        <LuHeart className="w-4 h-4 text-destructive fill-current" />
                        <span>in India</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default SimpleFooter;
