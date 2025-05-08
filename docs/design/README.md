# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів 
- ER-модель
- реляційна схема

Модель бізнес об'єктів 
 
@startuml
left to right direction

' --- Користувачі ---
entity User <> #900052
entity User.id <> #ed2f9b
entity User.first_name <> #ed2f9b
entity User.last_name <> #ed2f9b
entity User.email <> #ed2f9b
entity User.password <> #ed2f9b

User.id --* User
User.first_name --* User
User.last_name --* User
User.email --* User
User.password --* User

entity Role <> #055e29
entity Role.id <> #10c75a
entity Role.name <> #10c75a
entity Role.description <> #10c75a

Role.id --* Role
Role.name --* Role
Role.description --* Role

entity Permission <> #316e7a
entity Permission.id <> #5ebed1
entity Permission.name <> #5ebed1

Permission.id --* Permission
Permission.name --* Permission

entity UserRole <> #417035
entity RolePermission <> #702a48

User "1.1" -- "0..*" UserRole
UserRole "0..*" -- "1.1" Role

Role "1.1" -- "0..*" RolePermission
RolePermission "0..*" -- "1.1" Permission

' --- Контент ---
entity MediaContent <> #450561
entity MediaContent.id <> #941ac9
entity MediaContent.title <> #941ac9
entity MediaContent.description <> #941ac9
entity MediaContent.body <> #941ac9
entity MediaContent.content_type <> #941ac9
entity MediaContent.created_at <> #941ac9

MediaContent.id --* MediaContent
MediaContent.title --* MediaContent
MediaContent.description --* MediaContent
MediaContent.body --* MediaContent
MediaContent.content_type --* MediaContent
MediaContent.created_at --* MediaContent

User "1.1" -- "0..*" MediaContent

entity MediaContentTag <> #662923
entity Tag <> #04378a
entity Tag.id <> #3d7feb
entity Tag.name <> #3d7feb

Tag.id --* Tag
Tag.name --* Tag
MediaContent "1.1" -- "0..*" MediaContentTag
MediaContentTag "0..*" -- "1.1" Tag

' --- Джерела ---
entity Source <> #ad5a00
entity Source.id <> #e6861e
entity Source.name <> #e6861e
entity Source.url <> #e6861e

Source.id --* Source
Source.name --* Source
Source.url --* Source

entity MediaContentSource <> #804c32
MediaContent "1.1" -l- "0..*" MediaContentSource
MediaContentSource "0..*" -- "1.1" Source

entity SourceTag <> #3d7361
Source "1.1" -- "0..*" SourceTag
SourceTag "0..*" -- "1.1" Tag

' --- Аналітика ---
entity AnalysisResult <> #8f031a
entity AnalysisResult.id <> #e32040
entity AnalysisResult.created_at <> #e32040
entity AnalysisResult.title <> #e32040
entity AnalysisResult.description <> #e32040
entity AnalysisResult.body <> #e32040

AnalysisResult.id --* AnalysisResult
AnalysisResult.created_at --* AnalysisResult
AnalysisResult.title --* AnalysisResult
AnalysisResult.description --* AnalysisResult
AnalysisResult.body --* AnalysisResult

entity MediaContentAnalysisResult <> #592d33
MediaContent "1.1" -- "0..*" MediaContentAnalysisResult
MediaContentAnalysisResult "0..*" -- "1.1" AnalysisResult

User "1.1" -- "0..*" AnalysisResult

entity AnalysisResultTag <> #432b75
AnalysisResult "1.1" -- "0..*" AnalysisResultTag
AnalysisResultTag "0..*" -- "1.1" Tag

entity AnalysisReport <> #5b0673
entity AnalysisReport.id <> #bb38e0
entity AnalysisReport.created_at <> #bb38e0
entity AnalysisReport.title <> #bb38e0
entity AnalysisReport.body <> #bb38e0

AnalysisReport.id --* AnalysisReport
AnalysisReport.created_at --* AnalysisReport
AnalysisReport.title --* AnalysisReport
AnalysisReport.body --* AnalysisReport

AnalysisResult "1..*" -- "1.1" AnalysisReport
User "1.1" -- "0..*" AnalysisReport

entity AnalysisReportTag <> #1c4f3e
AnalysisReport "1.1" -- "0..*" AnalysisReportTag
AnalysisReportTag "0..*" -- "1.1" Tag

@enduml
