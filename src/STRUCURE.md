# 1. File management system

    The main container is divided into two sections (Side Nav & Work Area)
    Grid css is used to divide this sections
    The main Containter is controlled in the App.vue

## 1.1 Side Nav
    Side Nav has the main container that holdes the logo, Create new Button, Personal options and Cabinet options. It also controls the nav backgroud both image and color. It holds four components, (Logo, Create new, Personal Section, Cabinets Section) 
## 1.1.0 Utils
#### > Nav Item
    It's a component that takes (icon, label & item count) and displays them in an inline property
#### > Nav Parent Item
    It identifies a cabinet. It's a component that takes (icon, label, item count & toggle collapse icon)

### 1.1.1 Logo

### 1.1.2 Create New

### 1.1.3 Personal Section
    Personal section holds nav items that belongs to personal experience such as (inbox, starred, sent, personal). Nav Item is a component of its own

### 1.1.4 Cabinet Section
    It displays all the sections in a particular cabinet. Its head is a Nav Parent Item while the sections are represented by Nav Item

