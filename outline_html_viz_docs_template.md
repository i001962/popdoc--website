---
title: "HTML Viz"
description: "list of all values available for templating in html viz"
date: 2018-12-20T00:00:00-04:00
---
<!--WARNING! This page is auto-generated by a script. Please see the makefile in the website repo for details-->

{{ define "mdFn" }}
#### `{{ .Signature }}`
{{- if ne .Description "" }}
{{ .Description }}
{{- end -}}
{{- if gt (len .Params) 0 }}

**parameters:**

| name | type | description |
|------|------|-------------|
{{ range .Params -}}
| `{{ .Name }}` | `{{ .Type }}` | {{ .Description }} |
{{ end -}}
<br />
{{- end -}}
{{- end -}}


{{- range . -}}
{{- $path := .Name }}
{{- if ne .Path ""  }}{{ $path = .Path }}{{ end -}}
# <a id="{{.Name}}" href="#{{.Name}}">{{ $path }}</a>
{{ if ne .Description "" }}{{ .Description }}{{ end }}
{{- if gt (len .Functions) 0 }}
## Functions
{{ range .Functions -}}
{{ template "mdFn" . }}
{{ end -}}
{{- end }}
{{ if gt (len .Types) 0 }}
## Types
{{ range .Types -}}
### `{{ .Name }}`
{{ if ne .Description "" }}{{ .Description }}{{ end -}}
{{ if gt (len .Fields) 0 }}
**Fields**

| name | type | description |
|------|------|-------------|
{{ range .Fields -}}
| {{ .Name }} | {{ .Type }} | {{ .Description }} |
{{ end -}}
{{ end -}}
{{ if gt (len .Methods) 0 }}
**Methods**
{{- range .Methods -}}
{{ template "mdFn" . }}
{{ end -}}
{{- if gt (len .Operators) 0 }}
**Operators**

| operator | description |
|----------|-------------|
{{ range .Operators -}}
	| {{ .Opr }} | {{ .Description }} |
{{ end }}
{{ end }}
{{ end }}
{{- end -}}
{{- end -}}
{{ end }}