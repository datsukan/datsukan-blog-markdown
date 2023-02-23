import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleMarkdown } from './index';

export default {
  title: 'Markdown/ArticleMarkdown',
  component: ArticleMarkdown,
  args: {
    type: "ArticleMarkdown"
  }
} as ComponentMeta<typeof ArticleMarkdown>;

const Template: ComponentStory<typeof ArticleMarkdown> = (args) => <ArticleMarkdown {...args} />;

export const articleMarkdown = Template.bind({});
articleMarkdown.args = {
    text: "hoge",
};
