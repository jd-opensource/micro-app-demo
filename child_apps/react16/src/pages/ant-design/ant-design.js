import React from 'react'
import { Tabs } from 'antd'
import ButtonDemo from './components/button';
import IconDemo from './components/icon';
import TypographyDemo from './components/typography';
import DividerDemo from './components/divider';
import GridDemo from './components/grid';
import LayoutDemo from './components/layout';
import SpaceDemo from './components/space';
import AffixDemo from './components/affix';
import BreadcrumbDemo from './components/breadcrumb';
import DropdownDemo from './components/dropdown';
import MenuDemo from './components/menu';
import PageHeaderDemo from './components/page-header';
import PaginationDemo from './components/pagination';
import StepsDemo from './components/steps';
import AutoCompleteDemo from './components/auto-complete';
import CascaderDemo from './components/cascader';
import CheckboxDemo from './components/checkbox';
import DatePickerDemo from './components/date-picker';
import FormDemo from './components/form';
import InputDemo from './components/input';
import InputNumberDemo from './components/input-number';
import MentionsDemo from './components/mentions';
import RadioDemo from './components/radio';
import RateDemo from './components/rate';
import SelectDemo from './components/select';
import SliderDemo from './components/slider';
import SwitchDemo from './components/switch';
import TimePickerDemo from './components/time-picker';
import TransferDemo from './components/transfer';
import TreeSelectDemo from './components/tree-select';
import UploadDemo from './components/upload';
import AvatarDemo from './components/avatar';
import BadgeDemo from './components/badge';
import CalendarDemo from './components/calendar';
import CardDemo from './components/card';
import CarouselDemo from './components/carousel';
import CollapseDemo from './components/collapse';
import './ant-design.css'

const AntDesignPage = () => {
  return (
    <div className="ant-design-demo">
      <Tabs
        size="small"
        tabPosition="left"
        defaultActiveKey="Button"
        className="ant-design-demo-tabs"
        style={{ height: 'calc(100vh - 100px)', width: 'calc(100vw - 256px)' }}
        items={[
          {
            label: `通用`,
            key: '通用',
            disabled: true,
          },
          {
            label: 'Button 按钮',
            key: 'Button',
            children: <><h1>child-react16-ant-design-4.x: Button 按钮</h1><ButtonDemo /></>,
          },
          {
            label: 'Icon 图标',
            key: 'Icon',
            children: <><h1>child-react16-ant-design-4.x: Icon 图标</h1><IconDemo /></>,
          },
          {
            label: 'Typography 排版',
            key: 'Typography',
            children: <><h1>child-react16-ant-design-4.x: Typography 排版</h1><TypographyDemo /></>,
          },
          {
            label: `布局`,
            key: '布局',
            disabled: true,
          },
          {
            label: 'Divider 分割线',
            key: 'Divider',
            children: <><h1>child-react16-ant-design-4.x: Divider 分割线</h1><DividerDemo /></>,
          },
          {
            label: 'Grid 栅格',
            key: 'Grid',
            children: <><h1>child-react16-ant-design-4.x: Grid 栅格</h1><GridDemo /></>,
          },
          {
            label: 'Layout 布局',
            key: 'Layout',
            children: <><h1>child-react16-ant-design-4.x: Layout 布局</h1><LayoutDemo /></>,
          },
          {
            label: 'Space 间距',
            key: 'Space',
            children: <><h1>child-react16-ant-design-4.x: Space 间距</h1><SpaceDemo /></>,
          },
          {
            label: `导航`,
            key: '导航',
            disabled: true,
          },
          {
            label: 'Affix 固钉',
            key: 'Affix',
            children: <><h1>child-react16-ant-design-4.x: Affix 固钉</h1><AffixDemo /></>,
          },
          {
            label: 'Breadcrumb 面包屑',
            key: 'Breadcrumb',
            children: <><h1>child-react16-ant-design-4.x: Breadcrumb 面包屑</h1><BreadcrumbDemo /></>,
          },
          {
            label: 'Dropdown 下拉菜单',
            key: 'Dropdown',
            children: <><h1>child-react16-ant-design-4.x: Dropdown 下拉菜单</h1><DropdownDemo /></>,
          },
          {
            label: 'Menu 导航菜单',
            key: 'Menu',
            children: <><h1>child-react16-ant-design-4.x: Menu 导航菜单</h1><MenuDemo /></>,
          },
          {
            label: 'PageHeader 页头',
            key: 'PageHeader',
            children: <><h1>child-react16-ant-design-4.x: PageHeader 页头</h1><PageHeaderDemo /></>,
          },
          {
            label: 'Pagination 分页',
            key: 'Pagination',
            children: <><h1>child-react16-ant-design-4.x: Pagination 分页</h1><PaginationDemo /></>,
          },
          {
            label: 'Steps 步骤条',
            key: 'Steps',
            children: <><h1>child-react16-ant-design-4.x: Steps 步骤条</h1><StepsDemo /></>,
          },
          {
            label: `数据录入`,
            key: '数据录入',
            disabled: true,
          },
          {
            label: 'AutoComplete 自动完成',
            key: 'AutoComplete',
            children: <><h1>child-react16-ant-design-4.x: AutoComplete 自动完成</h1><AutoCompleteDemo /></>,
          },
          {
            label: 'Cascader 级联选择',
            key: 'Cascader',
            children: <><h1>child-react16-ant-design-4.x: Cascader 级联选择</h1><CascaderDemo /></>,
          },
          {
            label: 'Checkbox 多选框',
            key: 'Checkbox',
            children: <><h1>child-react16-ant-design-4.x: Checkbox 多选框</h1><CheckboxDemo /></>,
          },
          {
            label: 'DatePicker 日期选择框',
            key: 'DatePicker',
            children: <><h1>child-react16-ant-design-4.x: DatePicker 日期选择框</h1><DatePickerDemo /></>,
          },
          {
            label: 'Form 表单',
            key: 'Form',
            children: <><h1>child-react16-ant-design-4.x: Form 表单</h1><FormDemo /></>,
          },
          {
            label: 'Input 输入框',
            key: 'Input',
            children: <><h1>child-react16-ant-design-4.x: Input 输入框</h1><InputDemo /></>,
          },
          {
            label: 'InputNumber 数字输入框',
            key: 'InputNumber',
            children: <><h1>child-react16-ant-design-4.x: InputNumber 数字输入框</h1><InputNumberDemo /></>,
          },
          {
            label: 'Mentions 提及',
            key: 'Mentions',
            children: <><h1>child-react16-ant-design-4.x: Mentions 提及</h1><MentionsDemo /></>,
          },
          {
            label: 'Radio 单选框',
            key: 'Radio',
            children: <><h1>child-react16-ant-design-4.x: Radio 单选框</h1><RadioDemo /></>,
          },
          {
            label: 'Rate 评分',
            key: 'Rate',
            children: <><h1>child-react16-ant-design-4.x: Rate 评分</h1><RateDemo /></>,
          },
          {
            label: 'Select 选择器',
            key: 'Select',
            children: <><h1>child-react16-ant-design-4.x: Select 选择器</h1><SelectDemo /></>,
          },
          {
            label: 'Slider 滑动输入条',
            key: 'Slider',
            children: <><h1>child-react16-ant-design-4.x: Slider 滑动输入条</h1><SliderDemo /></>,
          },
          {
            label: 'Switch 开关',
            key: 'Switch',
            children: <><h1>child-react16-ant-design-4.x: Switch 开关</h1><SwitchDemo /></>,
          },
          {
            label: 'TimePicker 时间选择框',
            key: 'TimePicker',
            children: <><h1>child-react16-ant-design-4.x: TimePicker 时间选择框</h1><TimePickerDemo /></>,
          },
          {
            label: 'Transfer 穿梭框',
            key: 'Transfer',
            children: <><h1>child-react16-ant-design-4.x: Transfer 穿梭框</h1><TransferDemo /></>,
          },
          {
            label: 'TreeSelect 树选择',
            key: 'TreeSelect',
            children: <><h1>child-react16-ant-design-4.x: TreeSelect 树选择</h1><TreeSelectDemo /></>,
          },
          {
            label: 'Upload 上传',
            key: 'Upload',
            children: <><h1>child-react16-ant-design-4.x: Upload 上传</h1><UploadDemo /></>,
          },
          {
            label: `数据展示`,
            key: '数据展示',
            disabled: true,
          },
          {
            label: 'Avatar 头像',
            key: 'Avatar',
            children: <><h1>child-react16-ant-design-4.x: Avatar 头像</h1><AvatarDemo /></>,
          },
          {
            label: 'Badge 徽标数',
            key: 'Badge',
            children: <><h1>child-react16-ant-design-4.x: Badge 徽标数</h1><BadgeDemo /></>,
          },
          {
            label: 'Calendar 日历',
            key: 'Calendar',
            children: <><h1>child-react16-ant-design-4.x: Calendar 日历</h1><CalendarDemo /></>,
          },
          {
            label: 'Card 卡片',
            key: 'Card',
            children: <><h1>child-react16-ant-design-4.x: Card 卡片</h1><CardDemo /></>,
          },
          {
            label: 'Carousel 走马灯',
            key: 'Carousel',
            children: <><h1>child-react16-ant-design-4.x: Carousel 走马灯</h1><CarouselDemo /></>,
          },
          {
            label: 'Collapse 折叠面板',
            key: 'Collapse',
            children: <><h1>child-react16-ant-design-4.x: Collapse 折叠面板</h1><CollapseDemo /></>,
          },
        ]}
      />
    </div>
  );
}

export default AntDesignPage
