trigger: none

pool:
  vmImage: 'windows-latest'

variables:
  organization: 'https://dev.azure.com/YOUR_ORG'
  project: 'YOUR_PROJECT'
  iterationPath: 'YOUR_PROJECT\Sprint 1'
  areaPath: 'YOUR_PROJECT'

stages:
- stage: SetupSprint
  displayName: "Setup Ecommerce Sprint"
  jobs:
  - job: CreateWorkItems
    displayName: "Create Scrum Work Items"
    steps:

    - task: PowerShell@2
      displayName: "Create Epic, PBIs and Tasks"
      inputs:
        targetType: 'inline'
        script: |

          $org = "$(organization)"
          $project = "$(project)"
          $iteration = "$(iterationPath)"
          $area = "$(areaPath)"
          $pat = "$(ADO_PAT)"

          $base64AuthInfo = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes(":$pat"))

          function Create-WorkItem {
              param (
                  [string]$type,
                  [string]$title,
                  [string]$description,
                  [int]$storyPoints
              )

              $body = @(
                  @{
                      op = "add"
                      path = "/fields/System.Title"
                      value = $title
                  },
                  @{
                      op = "add"
                      path = "/fields/System.AreaPath"
                      value = $area
                  },
                  @{
                      op = "add"
                      path = "/fields/System.IterationPath"
                      value = $iteration
                  }
              )

              if ($description) {
                  $body += @{
                      op = "add"
                      path = "/fields/System.Description"
                      value = $description
                  }
              }

              if ($storyPoints -gt 0) {
                  $body += @{
                      op = "add"
                      path = "/fields/Microsoft.VSTS.Scheduling.StoryPoints"
                      value = $storyPoints
                  }
              }

              $json = $body | ConvertTo-Json -Depth 10

              $url = "$org/$project/_apis/wit/workitems/`$$type?api-version=7.0"

              $response = Invoke-RestMethod -Uri $url `
                  -Method Patch `
                  -ContentType "application/json-patch+json" `
                  -Headers @{Authorization=("Basic {0}" -f $base64AuthInfo)} `
                  -Body $json

              return $response.id
          }

          function Link-Parent {
              param (
                  [int]$childId,
                  [int]$parentId
              )

              $body = @(
                  @{
                      op = "add"
                      path = "/relations/-"
                      value = @{
                          rel = "System.LinkTypes.Hierarchy-Reverse"
                          url = "$org/_apis/wit/workItems/$parentId"
                      }
                  }
              ) | ConvertTo-Json -Depth 10

              $url = "$org/$project/_apis/wit/workitems/$childId?api-version=7.0"

              Invoke-RestMethod -Uri $url `
                  -Method Patch `
                  -ContentType "application/json-patch+json" `
                  -Headers @{Authorization=("Basic {0}" -f $base64AuthInfo)} `
                  -Body $body
          }

          Write-Host "Creating Epic..."

          $epicId = Create-WorkItem "Epic" `
              "Vue3 Ecommerce Frontend Foundation" `
              "Epic covering routing, modules, ecommerce pages and architecture improvements." `
              0

          Write-Host "Epic Created: $epicId"

          # ===== PBI 1 Routing =====
          $pbi1 = Create-WorkItem "Product Backlog Item" `
              "Implement Modular Vue Routing" `
              "Setup scalable Vue router with lazy loading, guards and layout." `
              5
          Link-Parent $pbi1 $epicId

          Create-WorkItem "Task" "Refactor router structure" "" 0 | ForEach-Object { Link-Parent $_ $pbi1 }
          Create-WorkItem "Task" "Implement lazy loading" "" 0 | ForEach-Object { Link-Parent $_ $pbi1 }
          Create-WorkItem "Task" "Add route guards" "" 0 | ForEach-Object { Link-Parent $_ $pbi1 }

          # ===== PBI 2 Product Module =====
          $pbi2 = Create-WorkItem "Product Backlog Item" `
              "Create Product Module Structure" `
              "Add product module with components, services and routes." `
              5
          Link-Parent $pbi2 $epicId

          Create-WorkItem "Task" "Create product folder structure" "" 0 | ForEach-Object { Link-Parent $_ $pbi2 }
          Create-WorkItem "Task" "Implement ProductList view" "" 0 | ForEach-Object { Link-Parent $_ $pbi2 }
          Create-WorkItem "Task" "Create productService.ts" "" 0 | ForEach-Object { Link-Parent $_ $pbi2 }

          Write-Host "Sprint Setup Completed Successfully"