import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

export default function Footer(props) {
    const {
        copyrightText,
        enableAnnotations
    } = props;

    return (
        <footer
            className={classNames(
                'sb-component',
                'sb-component-footer',
                'bg-light-fg-dark',
                'px-4 py-6 mt-10' // Adicionando margem superior com mt-10
            )}
            {...(enableAnnotations && { 'data-sb-object-id': props?.__metadata?.id })}
        >
            <div className="mx-auto max-w-7xl text-center">
                {copyrightText && (
                    <Markdown
                        options={{ forceInline: true, forceWrapper: true, wrapper: 'p' }}
                        className="sb-markdown text-sm"
                        {...(enableAnnotations && { 'data-sb-field-path': 'copyrightText' })}
                    >
                        {copyrightText}
                    </Markdown>
                )}
            </div>
        </footer>
    );
}
