import React from 'react';

function Header() {
    return (
        <div className="w-full flex justify-center py-8">
            <div className="flex flex-col items-center justify-center space-y-2">
                <label className="text-3xl md:text-4xl font-semibold text-center">
                    Welcome to NyayDost
                </label>
                <label className="text-sm text-muted-foreground">
                    Unlock intelligent search of Commercial Court cases with our generative UI.
                </label>
            </div>
        </div>
    );
}

export default Header;
